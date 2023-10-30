import React from 'react'
import prisma from '@/app/prismadb'
import ImageGallery from '@/components/ImageGallery';
import Info from '@/components/Info';
import ProductCard from '@/components/ProductCard';

async function  Page({params}:{params:{slug:string}}) {
  const productId = params.slug
  const product = await prisma.product.findUnique({
    where: {
      id: productId
    }
  })
  const relativeProduct = await prisma.product.findMany({
    where: {
      category:{
        contains: product.category
      },
      NOT: {
        id: product.id
      }
    }
  })
  const url = product.img;
  return (
    <>
    <div className='mt-20 px-10 mb-20'>
      <div className='grid grid-cols-2 gap-14'>
        {url && (
          <ImageGallery url={url}/>
        )}
        <Info product={product}/>
      </div>
        <div className='mt-20'>
          <div className='flex items-center space-x-5'>
            <span className='w-[5px] h-[30px] bg-orange-500 rounded-full inline-block'></span>
            <h3 className='text-black font-bold text-lg'>VỀ SẢN PHẨM</h3>
          </div>
          <div className='grid grid-cols-2'>
            <div style={{borderColor: `{${product.color.split(',').pop()}}`}} className='font-medium mt-10 leading-6 text-base h-[300px] border-[1px] rounded-md p-4 overflow-auto' 
            dangerouslySetInnerHTML={{__html:product.desc}}></div>
            <div className='flex items-center relative justify-end'>
              <img src={product.img.split(',').pop()} className='border-[1px] h-[300px] w-10/12 rounded-lg object-cover mt-10'/>
            </div>
          </div>
          <div className='mt-16 mx-20 border-t-[1px] border-orange-500 border-dashed'>
            <h3 className='flex items-center justify-center text-black font-bold text-lg mt-10'>SẢN PHẨM LIÊN QUAN</h3>
          </div>
          <div className='grid grid-cols-3 justify-center'>
          {relativeProduct.map((product) =>(
            <ProductCard key={product.id} product={product}/>
          ))}
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Page