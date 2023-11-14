import React from 'react'
import CartProduct from '@/components/CartProduct'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import Payment from '@/components/Payment'

type Props = {}
const Cart = async (props: Props) => {
  const session = await getServerSession(options)
  
  return (
    <div className='px-10 h-screen'>
      <CartProduct userId={session.user.id}/>

    </div>
  )
}

export default Cart