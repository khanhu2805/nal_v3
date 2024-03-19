import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function POST (req: Request, res: Response) {
    const body = await req.json()
    const {
        productId, 
        userId,
        size,
        color,
        quanity
    } = body
    try {
        const existingCartItem = await prisma.cart.findFirst({
            where: {
                productId, 
                userId,
                size,
                color
            }
        })
        if (existingCartItem) {
           await prisma.cart.delete({
            where: {
                id: existingCartItem.id
            }
           })
          
        }
        const product = await prisma.cart.create({
            data:{
                productId: productId,
                userId: userId,
                size: size,
                color: color,
                quanity: quanity
            }
        })
        return NextResponse.json(product)
    } catch (err) {
        console.log('Error adding cart',err)
        return NextResponse.error() 
    }
}

export async function DELETE(req: Request, res: Response) {
    const body = await req.json()
    const { id } = body;
    
    try {
        const deleteCart = await prisma.cart.delete({
            where:{
                id : id,
            }
        })
        return NextResponse.json(deleteCart)
    }
    catch(err) {
        console.log('error delete cart', err)
        return NextResponse.error()
    }
}

export async function GET(req: Request, res: Response) {
    try {
        const searchParams = new URLSearchParams(req.url.split('?')[1]);
        const id = searchParams.get('id');
        const numberCart = await prisma.cart.count({
            where:{
                userId: id,
            }
        })
        return NextResponse.json(numberCart)
    }
    catch(err) {
        console.log('error get number of cart', err)
        return NextResponse.error();
    }
}
