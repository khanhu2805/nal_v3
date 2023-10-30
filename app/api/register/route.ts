import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    const {
        name,
        phone,
        password,
        money,
    } = body

    try {
        const user = await prisma.user.create({
            data: {
                name,
                phone,
                password,
                money,
            }
        })
        return NextResponse.json(user)
    } catch {
        return NextResponse.error()
    }
}