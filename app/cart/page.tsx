import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import CartProduct from '@/components/CartProduct'
import Payment from '@/components/Payment'

type Props = {}

const Cart = async (props: Props) => {
  const session = await getServerSession(options)
  return (
    <div className='px-10'>
      <CartProduct userId={session.user.id}/>
      <hr className='mt-10 mb-10'/>
      {/* <Payment userId={session.user.id}/> */}
    </div>
  )
}

export default Cart