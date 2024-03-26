import React, { useEffect, useState } from 'react'
import ColorPicker from 'react-pick-color'

interface Props {
    setFormData: React.Dispatch<React.SetStateAction<any>>
    Color: string
}

const Color:React.FC<Props> = ({setFormData, Color}) => {
    const [color, setColor] = useState('#0000')
    const [open, setOpen] = useState<boolean>(false)
    const colorArray: string[] = Color.split(',')
    const [selectedColor, setSelectedColor] = useState<string[]>(colorArray)

    // Observer pattern: List of observers
    const observers: ((selectedColors: string[]) => void)[] = [];

    // Function to register observers
    const addObserver = (observer: (selectedColors: string[]) => void) => {
        observers.push(observer);
    }

    // Function to notify observers
    const notifyObservers = () => {
        observers.forEach(observer => observer(selectedColor));
    }

    if (colorArray.length<0) {
        setSelectedColor([]);
    }

    const handleColorButtonClick = () => {
        setSelectedColor((prev) => [...prev, color])
        setOpen(false);
    }

    useEffect(() => {
        const handleSelectedColor = () => {
            setFormData((prev:FormData) => ({
                ...prev,
                color: selectedColor.join(','),
            }));
            // Notify observers when selected colors change
            notifyObservers();
        }
        handleSelectedColor()
    },[selectedColor])

    const handleDeleteColor = (indexToDelete: number) => {
        setSelectedColor((prev) =>{
            const updateColor = [...prev];
            updateColor.splice(indexToDelete, 1)
            return updateColor
        });
        // Notify observers when selected colors change
        notifyObservers();
    }

    return (
        <div>
            <div className='flex items-center justify-between mt-3'>
                <button className='block border-[1px] rounded-lg px-3 text-base'
                onClick={() => setOpen(!open)}>
                    Chọn màu
                </button>
                {open && (
                    <ColorPicker color={color} onChange={(color) => setColor(color.hex)}/>
                )}
                <button className={`flex items-center space-x-1 border-[1px] rounded-lg p-1 px-3 text-base ${open? '': 'invisible'}`}
                onClick={handleColorButtonClick}>
                    Thêm màu
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <div className='mt-5'>
                {selectedColor.map((color, index) => (
                    <div key={index} className='flex items-center space-x-4 mb-2'>
                        <div className='w-[40px] h-[40px] rounded-full inline-block' style={{backgroundColor:color}}></div>
                        <span className='border-[1px] rounded-lg p-1 px-3 text-base'>{color}</span>
                        <button className='border-[1px] rounded-lg p-1 px-3 text-base' onClick={() => handleDeleteColor(index)}>
                            Xóa màu
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Color;
