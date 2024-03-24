'use client'
import axios from 'axios'
import React from 'react'

type Props = {
    allIds:string[],
    allQuanity: number[],
    userId: string,
}

const Buy = (props: Props) => {
    let userId;
    if (props.userId==undefined) userId = "65393e3836ada062bbb9ecb0";
    else userId = props.userId;
  const onCheckout = async() => {
    const res = await axios.post('/api/payment', {
      allIds: props.allIds,
      allQuanity: props.allQuanity,
      userId: userId,
    })
    window.location = res.data.url;
  }
  return (
    
    <button onClick={onCheckout} className='text-xl flex items-center font-semibold text-orange-500 border-[1px] border-orange-500 rounded-full py-2 px-5 hover:text-white hover:bg-orange-500 shadow-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
        MUA NGAY
    </button>
    
  )
}

export default Buy