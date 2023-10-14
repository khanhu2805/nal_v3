import prisma from '@/app/prismadb'
import { useSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function GET (req: Request) {
    const {data:session} = useSession();
    
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: session.user.id,
            },
            select: {
                money:true,
            }
        })
        return NextResponse.json(user);
    }
    catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}