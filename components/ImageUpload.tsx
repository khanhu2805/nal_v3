import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'

type Props = {
    info:any,
    setInfo: React.Dispatch<React.SetStateAction<any>>,
    imageUrls: string[],
    setImageUrls: React.Dispatch<React.SetStateAction<string[]>>,
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const ImageUpload = ({info, setInfo, imageUrls, setImageUrls, handleImageChange}:Props) => {
    const onUpload = (result:any) => {
        setInfo(result.info.secure_url);
        const newImageUrl = result.info.secure_url
        setImageUrls(pre => [...pre, newImageUrl])
        handleImageChange(result)
    }

    const handleDeleteImage = (index: number) => {
        setImageUrls(pre => {
            const update = [...pre]
            update.splice(index, 1)
            return update
        })
    }
  return (
    <div>
        <div className='mb-10'>
            <CldUploadWidget uploadPreset='p16bpy4o' onUpload={onUpload}>
                {({open}: any) => {
                    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
                        e.preventDefault();
                        open()
                    }
                    return (
                        <button onClick={handleOnClick} className='border-[1px] rounded-lg p-1 px-2'>
                            Tải ảnh sản phẩm
                        </button>
                    )
                }}
            </CldUploadWidget>
        </div>
        <div className='grid grid-cols-4 gap-10'>
            {imageUrls.map((imageUrl, index) => (
                <div className='flex flex-col justify-center items-center' key={index}>
                    <img src={imageUrl} className='w-[250px] h-[300px] object-cover object-top' alt={`image ${index}`}/>
                    <button className='border-[1px] rounded-lg p-1 px-2 mt-5' onClick={() => handleDeleteImage(index)}>
                        Xóa ảnh
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageUpload