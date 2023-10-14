import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function GET (req: Request) {
    try {
        const searchParams = new URLSearchParams(req.url.split('?')[1])
        const category = searchParams.getAll('category[]')
        let size = searchParams.getAll('size[]')
        const minPriceStr = searchParams.get('price[min]')
        const maxPriceStr = searchParams.get('price[max]')
        const minPrice = minPriceStr? parseInt(minPriceStr) : undefined
        const maxPrice = maxPriceStr? parseInt(maxPriceStr) : undefined
        const product = await prisma.product.findMany({
            where: {
                AND: [
                    ...category.map((cate) => ({
                        category: {
                            contains: cate
                        }
                    })),
                    ...size.map((size) => ({
                        size: {
                            contains: size
                        }
                    })),
                    {
                        price: {
                            gte:minPrice,
                            lte:maxPrice
                        }
                    }
                ]   
            }
        })
        return NextResponse.json(product);
    }
    catch (err){
        return NextResponse.error()
    }
}