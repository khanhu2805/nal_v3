import prisma from "@/app/prismadb"
import { NextResponse } from "next/server";
export async function DELETE(req: Request, res: Response) {
    const {id} = await req.json();

    try {
        const deleteProduct = await prisma.product.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json(deleteProduct);
    }
    catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}