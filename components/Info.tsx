'use client'
import numberWithCommas from '@/number_commas'
import React, { useState } from 'react'

type Props = {
    product:any
}

const Info = (props: Props) => {
    const color = props.product.color.split(',')
    const size = props.product.size.split(',')
    const [selectedSize, setSelectedSize] = useState<string>();
    const [selectedColor, setSelectedColor] = useState<string>();
    const [quanity, setQuanity] = useState<number>(1);

    const handleChangeQuanity = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuanity(parseInt(e.target.value));
    }
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center'>
            <h1 className='text-black font-bold text-3xl'>{props.product.name}</h1>   
        </div>
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
        <div className='grid grid-cols-3 gap-[60px] mt-10'>
            <button className='text-xl font-semibold text-orange-500 border-[1px] border-orange-500 rounded-lg py-2 hover:text-white hover:bg-orange-500 shadow-lg'>THÊM VÀO GIỎ HÀNG</button>
            <button className='text-xl font-semibold text-orange-500 border-[1px] border-orange-500 rounded-lg py-2 hover:text-white hover:bg-orange-500 shadow-lg'>THANH TOÁN</button>
        </div>
    </div>
  )
}

export default Info