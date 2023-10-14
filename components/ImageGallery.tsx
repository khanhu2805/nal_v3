'use client'
import React, { useState } from 'react'

type Props = {
    url: string
}

const ImageGallery = (props: Props) => {
    const [selectedImg, setSelectedImg] = useState<number>(0)
    const urlArr = props.url.split(',')
  return (
    <div className='grid grid-cols-7'>
        <div className='flex flex-col col-span-2 justify-center items-center'>
            {urlArr.map((url, i) => (
                <div key={i} className='rounded-lg'>
                    <img onClick={() => setSelectedImg(i)}
                    className={`w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top border-[1px] ${selectedImg === i ? 'border-orange-500' :''}`}
                    src={url} alt={url}
                    />
                </div>
            ))}
        </div>
        <div className='col-span-5'>
            <img className='h-[600px] w-[400px] object-cover object-center'
            src={urlArr[selectedImg]}/>
        </div>
    </div>
  )
}

export default ImageGallery