
import React from 'react'
import prisma from '@/app/prismadb' 
import Link from 'next/link'
import numberWithCommas from '@/number_commas'
import AddCart from './AddCart'
import Product from '@/app/prototype/product'
type Props = {
    userId:string
}

const Purchased = async (props: Props) => {
    const purchasedProduct = await prisma.purchased.findMany({
        where: {
            userId:props.userId
        }
    })

    const product = purchasedProduct.map((product) => (
        prisma.product.findUnique({
            where: { 
                id: product.productId
            }
        })
    ))
  
    const product_arr = await Promise.all(product)
    if (product_arr.length === 0) {
        return(
            <div className='flex flex-col w-screen h-fit mt-40 mb-40 items-center justify-center'>
                <h1 className='text-2xl font-base italic'>LỊCH SỬ MUA HÀNG TRỐNG, MUA HÀNG ĐI</h1>
            </div>
        )
    }
    const cloneProduct = (productId: string, selectedSize:string, selectedColor:string, quanity:number) => {
        return new Product(productId, selectedSize, selectedColor, quanity).clone();
    }
    return (
        <div className='flex flex-col mb-20'>
            {product_arr.map((product, i) => (
                    <div key={i} className='flex relative items-center mt-20 w-8/12 mx-auto shadow-xl p-5 rounded-xl border-[1px]'>
                        <Link className='flex space-x-5 items-center' href={`/product/${product.id}`}>
                            <img src={product.img.split(',')[0]} className='w-[200px] h-[200px] object-cover object-center rounded-xl'/>
                            <div>
                                <h1 className='text-2xl mb-3'>{product.name}</h1>
                                <h2 className='mb-3 '>Giá: {numberWithCommas(product.price)}</h2>
                                <div className='flex items-center space-x-5 mb-3'>
                                    <h2 className=''>Màu sắc:</h2>
                                    <div
                                    style={{backgroundColor:purchasedProduct[i].color}}
                                    className={`h-[30px] w-[30px] text-base`}></div>
                                </div>
                                <h2 className='mb-3 '>Size: {purchasedProduct[i].size}</h2>
                                <h2 className='mb-3 '>Số lượng: {purchasedProduct[i].quanity}</h2>
                                <h2 className='mb-3 '>Ngày mua: {purchasedProduct[i].date}</h2>
                            </div>
                        </Link>
                        <div className='absolute right-10'>
                            <AddCart productId={cloneProduct(product.id, purchasedProduct[i].size, purchasedProduct[i].color, purchasedProduct[i].quanity).productId} selectedColor={cloneProduct(product.id, purchasedProduct[i].size, purchasedProduct[i].color, purchasedProduct[i].quanity).selectedColor} selectedSize={cloneProduct(product.id, purchasedProduct[i].size, purchasedProduct[i].color, purchasedProduct[i].quanity).selectedSize} quanity={cloneProduct(product.id, purchasedProduct[i].size, purchasedProduct[i].color, purchasedProduct[i].quanity).quantity} button_text='MUA LẠI'></AddCart>
                        </div>
                    </div>     
            ))}
        </div>
      )
}

export default Purchased