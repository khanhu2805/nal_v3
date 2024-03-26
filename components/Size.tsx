import React, { useState } from 'react'

interface Props  {
    setFormData: React.Dispatch<React.SetStateAction<any>>
}

const createSizeComponent = (setFormData) => {
    const [selectedSize, setSelectedSize] = useState([]);
    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  
    const handleSizeButtonClick = (size) => {
      setSelectedSize((prevSelectedSize) => {
        if (prevSelectedSize.includes(size)) {
          return prevSelectedSize.filter((s) => s !== size);
        } else {
          return [...prevSelectedSize, size];
        }
      });
    };
  
    const handleSubmit = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: selectedSize.join(','),
      }));
    };
  
    return (
      <div>
        {sizes.map((size) => (
          <button
            key={size}
            className={`border-[0.5px] rounded-lg text-center text-base py-0.5 cursor-pointer px-3 mt-4 mb-5 mr-5 
              ${selectedSize.includes(size) ? 'bg-orange-100' : ''}`}
            onClick={() => handleSizeButtonClick(size)}
          >
            {size}
          </button>
        ))}
        <button onClick={handleSubmit} className="border-[0.5px] rounded-lg rounded-md py-0.5 px-3">
          Xác nhận
        </button>
      </div>
    );
  };

  export default createSizeComponent