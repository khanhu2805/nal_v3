import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    productId?:string;
    selectedSize:string;
    selectedColor:string;
    quanity:number
}

const AddCart = (props: Props) => {
    const {data:session} = useSession()
    const id = session?.user.id
    const router = useRouter()

    const handleCart = async () =>{
        if (session?.user) {
        try {
            const response = await axios.post('/api/cart', {
                productId:props.productId,
                userId: id,
                size: props.selectedSize,
                color: props.selectedColor,
                quanity: props.quanity
            })
            .then((response) => {
                console.log(response.data)
                alert('Đã thêm vào giỏ hàng')
            })
        }catch (error) {
            console.log(error)
        }
        } else {
            router.push('/sign_in')
        }
    }

        return (
            <button onClick={handleCart} className='text-xl flex items-center justify-center font-semibold text-orange-500 border-[1px] border-orange-500 rounded-full py-2 hover:text-white hover:bg-orange-500 shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                THÊM VÀO GIỎ HÀNG
            </button>

        )
}

export default AddCart