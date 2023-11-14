import React from 'react'
import prisma from '@/app/prismadb'
import Edit from '@/components/Edit'
type Props = {}

const EditProduct = async ({params}: {params:{slug:string}}) => {
  const productId = params.slug
  try {
    const product = await prisma.product.findUnique({
      where: {id: productId}
    })
    if (!product) {
      return (
      <div>Product not found</div>)
    }
    return (
      <div>
        <Edit product={product}/>
      </div>
    )
  }catch (err) {
    console.log(err);
    return (
    <div>Error</div>
  )}
  
}

export default EditProduct