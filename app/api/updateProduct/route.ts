import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server';
export async function PATCH(req: Request){
    const body = await req.json();
    const {
        id,
        name,
        desc,
        price, 
        quanity, 
        size, 
        color, 
        img, 
        category 
    } = body

    try {
        const updateProduct = await prisma.product.update({
            where: {id:id},
            data: {
                name,
                desc,
                price, 
                quanity, 
                size, 
                color, 
                img, 
                category 
            }
        })
        return NextResponse.json(updateProduct)
    }catch (err) {
        console.log(err)
        return NextResponse.error()
    }
}