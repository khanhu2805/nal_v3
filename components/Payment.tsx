import React from 'react'

type Props = {
    userId: string
}

const Payment = (props: Props) => {
  return (
    <button className='text-xl font-semibold text-orange-500 border-[1px] border-orange-500 rounded-full py-2 hover:text-white hover:bg-orange-500 shadow-lg'>THANH TOÁN</button>
  )
}

export default Payment