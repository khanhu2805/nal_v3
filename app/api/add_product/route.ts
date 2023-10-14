import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
    const body = await req.json()
    const {
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
        const product = await prisma.product.create({
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
        return NextResponse.json(product)
    }
    catch (error) {
        console.log('Loi them san pham', error);
        return NextResponse.error();
    }
}