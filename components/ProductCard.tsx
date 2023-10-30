'use client'
import numberWithCommas from '@/number_commas'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function ProductCard({product}){
  if (usePathname().startsWith('/product')) {
  return (
    <Link href={`/product/${product.id}`} className='mt-4'>
        <div className='border-[1px] h-[500px] w-[300px] rounded-md shadow-xl p-4 px-auto transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='flex justify-center'>
              <img className='h-72 w-64 rounded-md object-cover object-center' src={product.img.split(',')[0]} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mt-5 h-10'>{product.name}</h3>
            <div className='text-xl font-bold text-orange-400 mt-5 flex flex-row'>
              <p className='basis-3/4'>{numberWithCommas(product.price)}</p>
              <p className='basis-1/4'>VNĐ</p>
            </div>
            <button className='h-fit w-fit mt-5 border-solid border-2 border-orange-400 p-2 rounded-md hover:bg-orange-400 hover:text-white text-black text-lg font-bold hover:rounded-full hover:delay-100'>Thêm vào giỏ hàng</button>
        </div>  
    </Link>
  )}
  return (
    <Link href={`/product/${product.id}`}>
        <div className='border-[1px] h-[500px] w-[300px] rounded-md shadow-2xl p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='flex justify-center'>
              <img className='h-72 w-64 rounded-md object-cover object-center' src={product.img.split(',')[0]} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mt-5 h-10 text-left px-2'>{product.name}</h3>
            <div className='text-xl font-bold text-orange-400 mt-5 flex flex-row justify-between px-2'>
              <p className=''>{numberWithCommas(product.price)}</p>
              <p className=''>VNĐ</p>
            </div>
            <div className='flex justify-center'>
              <button className='h-fit w-fit mt-5 border-solid border-2 border-orange-400 p-2 rounded-md hover:bg-orange-400 hover:text-white text-black text-lg font-bold hover:rounded-full hover:delay-100'>Thêm vào giỏ hàng</button>
            </div>
        </div>  
    </Link>
  )
}

export default ProductCard