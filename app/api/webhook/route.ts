import Stripe from "stripe";
import prisma from '@/app/prismadb'
import {headers} from 'next/headers'
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion:'2023-10-16', typescript:true});

export async function POST(req: Request, res: Response) {
    const body = await req.text();
    const signature = headers().get('Stripe-Signature') as string;

    let event:Stripe.Event;
    
    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.WEBHOOK_SIGNIN_KEY!)
    }catch (err) {
        return new NextResponse(`Error: ${err.message}`, {status:400});
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === 'checkout.session.completed') {
        const paymentIntentSucceded = event.data.object

        const purchaseId = session?.metadata?.allIds
   
        const userId = session?.metadata?.userId
        const today = new Date();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        const date = today. getDate();
        const currentDate = month + "/" + date + "/" + year;
        if (purchaseId) {
            const jsonArr = JSON.parse(purchaseId)
            if (Array.isArray(jsonArr)) {
                jsonArr.forEach(async (productId, i) => {
                    const cart = await prisma.cart.findFirst({
                        where: {
                            userId: userId,
                            productId: productId,
                        }
                    })
                    const purchase = {
                        productId: cart.productId,
                        userId: cart.userId,
                        quanity: cart.quanity,
                        color: cart.color,
                        size: cart.size,
                        date: date + "/" + month + "/" + year
                    }
                    await prisma.purchased.create({
                        data: purchase
                    })
                    await prisma.cart.deleteMany({
                        where: {
                            userId: userId,
                            productId: productId,
                        }
                    })
                    await prisma.product.update({
                        where: {
                            id: productId
                        },
                        data: {
                            quanity: {
                                decrement:cart.quanity
                            }
                        }
                    })
                })
            }
        }
    }
    return new NextResponse(null, {status: 200})
}