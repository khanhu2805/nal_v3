
import React from 'react'
import prisma from '@/app/prismadb'
import Link from 'next/link'
import numberWithCommas from '@/number_commas'
import Delete from './Delete'
import Payment from './Payment'
type Props = {
    userId: string
}

const CartProduct = async (props: Props) => {
    const cart = await prisma.cart.findMany(
        {
            where: { 
                userId: props.userId
            }
        }
    ) 
    const product = cart.map((product) => (
        prisma.product.findUnique({
            where: { 
                id: product.productId
            }
        })
    ))
  
    const cartProduct = await Promise.all(product)
    const allIds = cart.map((product) => product.productId)
    const allQuanity = cart.map((product) => product.quanity)
    if (cartProduct.length === 0) {
        return(
            <div className='flex flex-col w-screen mt-40 mb-40 items-center justify-center'>
                <h1 className='text-2xl font-base italic'>CHƯA CÓ SẢN PHẨM TRONG GIỎ HÀNG, THÊM VÔ GIỎ HÀNG ĐI</h1>
                <Link href='/product' className='hover:shadow-2xl text-xl font-semibold text-orange-500 border-[1px] border-orange-500 rounded-lg p-4 mt-10 hover:bg-orange-500 hover:text-white'>
                    Tới trang sản phẩm
                </Link>
            </div>
        )
    }
  return (
    
    <div className='flex flex-col mb-10'>
        
        {cartProduct.map((product, i) => (
                <div key={i} className='flex relative items-center mt-20 w-8/12 mx-auto shadow-xl p-5 rounded-xl border-[1px]'>
                    <Link className='flex relative space-x-5 items-center' href={`/product/${product.id}`}>
                        <img src={product.img.split(',')[0]} className='w-[200px] h-[200px] object-cover object-center'/>
                        <div>
                            <h1 className='text-2xl mb-3'>{product.name}</h1>
                            <h2 className='mb-3 '>Giá: {numberWithCommas(product.price)}</h2>
                            <div className='flex items-center space-x-5 mb-3'>
                                <h2 className=''>Màu sắc:</h2>
                                <div
                                style={{backgroundColor:cart[i].color}}
                                className={`h-[30px] w-[30px] text-base`}></div>
                            </div>
                            <h2 className='mb-3 '>Size: {cart[i].size}</h2>
                            <h2 className='mb-3 '>Số lượng: {cart[i].quanity}</h2>
                        </div>
                    </Link>
                    <div className='absolute right-2'>
                        <Delete id = {cart[i].id}/>
                    </div>
                </div>     
        ))}
        <div className='flex justify-center mt-10'>
            <Payment allIds={allIds} allQuanity={allQuanity} userId={props.userId}/>
        </div>
        
    </div>
  )
}

export default CartProduct