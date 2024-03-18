import prisma from "@/app/prismadb"
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {
    const {id} = await req.json();

    try {
        const purchasedProduct = await prisma.purchased.findMany({
            where: {
                id: id
            }
        })
        return NextResponse.json(purchasedProduct);
    }
    catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}