import React, { useState } from 'react'

interface Props  {
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const Category :React.FC<Props>= ({setFormData}) => {
    const [selectedCate, setSlectedCate] = useState<string[]>([]);
    const categories = ['Quan_Tay', 'Quan_Jean', 'Quan_Jogger', 'Ao_Thun', 'Ao_So_Mi', 'Ao_Hoodie', 'Ao_Khoac_Jean'];

    const handleSizeButtonClick = (cate:string) => {
        setSlectedCate((prevSelected) => {
            if(prevSelected.includes(cate)) {
                return prevSelected.filter((s) => s!==cate)
            }
            else {
                return[...prevSelected, cate];
            }
        })
    }

    const handleSubmit = () => {
        setFormData((prevSetFormData:FormData) => ({
            ...prevSetFormData,
            category: selectedCate.join(',')
        }))
    }
  return (
    <div>
        {categories.map((cate) => (
            <button key={cate}
            className={`border-[0.5px] rounded-lg text-center text-base py-0.5 cursor-pointer px-3 mt-4 mb-5 mr-5 
            ${selectedCate.includes(cate) ? 'bg-orange-100':''}`}
            onClick={() => handleSizeButtonClick(cate)}>
                {cate} 
            </button>
        ))}
        <button onClick={handleSubmit} className='border-[0.5px] rounded-lg rounded-md py-0.5 px-3'>Xác nhận</button>
    </div>
  )
}

export default Category