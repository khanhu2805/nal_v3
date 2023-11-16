'use client'
import axios from 'axios'
import React from 'react'

type Props = {
    allIds:string[],
    allQuanity: number[],
    userId: string
}

const Payment = (props: Props) => {
  const onCheckout = async() => {
    const res = await axios.post('/api/payment', {
      allIds: props.allIds,
      allQuanity: props.allQuanity,
      userId: props.userId
    })
    window.location = res.data.url;
  }
  return (
    
    <button
    onClick={onCheckout}
    className='text-xl font-semibold text-orange-500 border-[1px] border-orange-500 rounded-full py-2 px-5 hover:text-white hover:bg-orange-500 shadow-lg'>
      THANH TOÁN
    </button>
    
  )
}

export default Payment