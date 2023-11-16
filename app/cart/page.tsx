import React from 'react'
import CartProduct from '@/components/CartProduct'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import Payment from '@/components/Payment'
import Purchased from '@/components/Purchased'

type Props = {}
const Cart = async (props: Props) => {
  const session = await getServerSession(options)
  
  return (
    <div className='px-10 h-full'>
      <h1 className='mt-20 text-2xl font-bold w-screen text-center'>GIỎ HÀNG CỦA BẠN</h1>
      <CartProduct userId={session.user.id}/>
      <hr className='mt-10 mb-10'/>
      <h1 className='text-2xl font-bold w-screen text-center'>LỊCH SỬ MUA HÀNG</h1>
      <Purchased userId={session.user.id}/>
    </div>
  )
}

export default Cart