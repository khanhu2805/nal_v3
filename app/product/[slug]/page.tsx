import React from 'react'
import prisma from '@/app/prismadb'
import ImageGallery from '@/components/ImageGallery';
import Info from '@/components/Info';

async function  Page({params}:{params:{slug:string}}) {
  const productId = params.slug
  const product = await prisma.product.findUnique({
    where: {
      id: productId
    }
  })
  const url = product.img;
  return (
    <>
    <div className='grid grid-cols-2 gap-14 mt-20 px-5 mb-20'>
        {url && (
          <ImageGallery url={url}/>
        )}
        <Info product={product}/>
        <div className='flex flex-col col-span-2'>
          <h3 className='w-full text-center font-bold text-lg'>THÔNG TIN SẢN PHẨM</h3>
          <div className='mt-10'>
            {product.desc}
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Page