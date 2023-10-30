'use client'
import numberWithCommas from '@/number_commas'
import React, { useState } from 'react'
import AddCart from './AddCart'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Payment from './Payment'

type Props = {
    product:any
}

const Info = (props: Props) => {
    const color = props.product.color.split(',')
    const size = props.product.size.split(',')
    const {data:session} = useSession()
    const currentUserId = session?.user.id
    const [selectedSize, setSelectedSize] = useState<string>(size[0]);
    const [selectedColor, setSelectedColor] = useState<string>(color[0]);
    const [quanity, setQuanity] = useState<number>(1);

    const handleChangeQuanity = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuanity(parseInt(e.target.value));
    }
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center'>
            <h1 className='text-black font-bold text-3xl'>{props.product.name}</h1>   
        </div>
        {session?.user.name ==='admin' && (
            <Link href={`/admin/edit/${props.product.id}`}>
                <span className='absolute top-[150px] right-[50px] p-4 hover:bg-orange-500 border-[1px] border-orange-500 hover:text-white bg-white rounded-full text-orange-500 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </span>
            </Link>
        )}
        <div className='flex justify-end mt-10'>
            <h3 className='text-black font-semibold text-lg'>SỐ LƯỢNG SẢN PHẨM: <span className='text-orange-500'>{props.product.quanity}</span></h3>
        </div>
        <h3 className='text-orange-500 font-bold text-2xl mt-5'>{numberWithCommas(props.product.price)} VNĐ</h3>
        <div className='flex flex-row border-t-[1px] border-gray-500 border-dashed mt-10 space-x-8 '>
            <h3 className='text-black font-bold text-lg mt-10'>SIZE</h3>
            {size.map((size) => (
                <button key={size} 
                onClick={() => {setSelectedSize(size);}}
                className={`border-[1.5px] rounded-lg px-8 py-1 text-base font-semibold mt-10 hover:bg-orange-500 hover:text-white ${selectedSize===size?'bg-orange-500 text-white':''}`}>{size}</button>
            ))}
        </div>
        <div className='flex flex-row border-t-[1px] border-gray-500 border-dashed mt-10 space-x-8 '>
            <h3 className='text-black font-bold text-lg mt-14'>MÀU SẮC</h3>
            {color.map((color) => (
                <button key={color} 
                onClick={() => {setSelectedColor(color);}}
                style={{backgroundColor:color}}
                className={`outline-none rounded-full h-[50px] w-[50px] text-base border-[2px] font-semibold mt-10 hover:outline-[2px] hover:outline-orange-500 ${selectedColor===color?'outline-[2px] outline-orange-500':''}`}></button>
            ))}
        </div>
        <div className='grid grid-cols-5 border-t-[1px] border-gray-500 border-dashed mt-10 space-x-8 '>
            <h3 className=' text-black font-bold text-lg mt-12'>SỐ LƯỢNG</h3>
            <input className='py-1 w-[100px] outline-none border-[2px] focus:border-orange-500 rounded-lg mt-10 text-base text-center'
            type='number'
            value={quanity}
            onChange={handleChangeQuanity}
               />
        </div>
        <div className='grid grid-cols-2 gap-[60px] mt-10'>
            <AddCart productId={props.product.id} selectedSize={selectedSize} selectedColor={selectedColor} quanity={quanity}/>
            <Payment userId={''}/>
        </div>
    </div>
  )
}

export default Info