'use client'
import Category from '@/components/Category'
import Color from '@/components/Color'
import ImageUpload from '@/components/ImageUpload'
import Para from '@/components/Para'
import Size from '@/components/Size'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const AddForm = (props: Props) => {
    const router = useRouter();
    const[formData, setFormData] = useState({
        name:'',
        desc:'',
        price: 0,
        quanity:0,
        size:'',
        color:'#0000',
        img:'',
        category:'',  
    })

    const[desc, setDesc] = useState<string>('');
    const[info, setInfo] = useState<any>();
    const[imageUrls, setImageUrls] = useState<string[]>([]);
    const hanldeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target
      setFormData({
        ...formData,
        [name]: value
      })
    }

    const hanldePriceChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name === 'price' ? parseInt(e.target.value) : parseInt(e.target.value)
      const quanity = e.target.name === 'quanity' ? parseInt(e.target.value) : parseInt(e.target.value)
      setFormData({
        ...formData,
        [e.target.name] :value,
        [e.target.name] :quanity,
      })
    }

    const handleImageChange = () =>{
      const stringImages = JSON.stringify(imageUrls)
      setFormData({
        ...formData, 
        img:stringImages,
      })
    }

    useEffect(() => {
      console.log(formData.img)
      console.log(formData)
    }, [formData])

    useEffect(() => {
      setFormData((prev) => ({
        ...prev,
        img:imageUrls.toString(),
        desc:desc
      }))
    }, [imageUrls, desc]);

    const submit = async () => {
      handleImageChange();
        axios.post('/api/add_product', formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => {
          alert('Thêm sản phẩm thành công!')
        });
        
    }
  return (
    <div className='h-fit w-fit py-10 mx-40'>
        <h1 className='text-2xl font-semibold'>THÊM SẢN PHẨM MỚI</h1>
        <div className='text-black mt-4 '>
          <div className='w-full grid grid-cols-2 gap-10'>
            <div className='space-y-2'>
                <label htmlFor='name' className='font-medium'>TÊN SẢN PHẨM</label>
                <input 
                type='text'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='name'
                value={formData.name}
                onChange={hanldeChange}
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor='category' className='font-medium'>CATEGORY</label>
                <input 
                type='text'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='category'
                value={formData.category}
                onChange={hanldeChange}
                />
                <Category setFormData={setFormData}/>
            </div>
            <div className='space-y-2'>
                <label htmlFor='price' className='font-medium'>GIÁ</label>
                <input 
                type='number'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='price'
                value={formData.price}
                onChange={hanldePriceChange}
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor='color' className='font-medium'>MÀU SẮC</label>
                <input 
                type='text'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='color'
                value={formData.color}
                onChange={hanldeChange}
                />
                <Color setFormData={setFormData} Color={formData.color}/>
            </div>
            <div className='space-y-2'>
                <label htmlFor='size' className='font-medium'>SIZE</label>
                <input 
                type='text'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='size'
                value={formData.size}
                onChange={hanldeChange}
                />
                <Size setFormData={setFormData}/>
            </div>
            <div className='space-y-2'>
                <label htmlFor='quanity' className='font-medium h-fit'>SỐ LƯỢNG</label>
                <input 
                type='number'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='quanity'
                value={formData.quanity}
                onChange={hanldePriceChange}
                />
            </div>
          </div>
            <label htmlFor='desc' className='inline-block mt-10 font-medium'>MÔ TẢ</label>
            {/* <input 
                type='text'
                className='w-full h-[50px] border-[1px] rounded-lg focus:border-orange-500 px-3 focus:border-2 outline'
                name='desc'
                value={formData.desc}
                onChange={hanldeChange}
                />  */}
                <Para setDesc={setDesc} desc ={desc}/>
            <label htmlFor='desc' className='inline-block mt-10 font-medium'>HÌNH ẢNH SẢN PHẨM</label>
            <ImageUpload info={info} setInfo={setInfo} imageUrls={imageUrls} setImageUrls={setImageUrls} handleImageChange={handleImageChange}/>
            <div className="w-full text-center">
              <button onClick={submit} className='text-black bg-orange-500 px-5 py-2 rounded-lg border-[1px] shadow-md text-xl font-semibold hover:text-white mt-10'>THÊM SẢN PHẨM</button>
            </div>
        </div>
    </div>
  )
}

export default AddForm