import Stripe from "stripe";
import prisma from '@/app/prismadb'
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion:'2023-10-16', typescript:true});

const corsHeader = {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type, Authorization"
}

// export function OPTIONS(req: Request, res: Response) {
//     return NextResponse.json({}, {headers:corsHeader})
// }

export async function POST (req: Request) {
    const {allIds, allQuanity, userId} = await req.json();
    try {
    if (!allIds.length || allIds.length === 0) {
        return new NextResponse("Không có sản phẩm", {status:400});
    }
    const products = await prisma.product.findMany({
        where: {
            id: {
                in: allIds
            }
        }
    })

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    products.forEach((product, i) => {
        line_items.push({
            quantity: allQuanity[i],
            price_data: {
                currency: 'VND',
                product_data: {
                    name: product.name,
                    images: product.img.split(',')
                },
                unit_amount: product.price 
            }
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode:'payment',
        billing_address_collection: 'required',
        phone_number_collection:{
            enabled: true,
        },
        success_url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart?success=1`,
        cancel_url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/cart?cancelled=1`,
        metadata: {
            allIds: JSON.stringify(allIds),
            userId: userId,
        }
    })

    return NextResponse.json({url: session.url}, {headers: corsHeader})
}catch (error) {
    return NextResponse.error()
}
}