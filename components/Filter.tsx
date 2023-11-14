'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {
    selectedCategory: string[];
    setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
    selectedSize: string[];
    setSelectedSize: React.Dispatch<React.SetStateAction<string[]>>;
    price: {
        min: number,
        max: number
    }
    setPrice: React.Dispatch<React.SetStateAction<{min:number; max:number}>>;
}

const Filter = (props: Props) => {
    const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.name === 'min' ? parseInt(e.target.value) : e.target.value;
        props.setPrice({
            ...props.price,
            [e.target.name]: value
        })
    }
    const handleMaxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.name === 'max' ? parseInt(e.target.value) : e.target.value;
        props.setPrice({
            ...props.price,
            [e.target.name]: value
        })
    }

    const clickCategory = (category:string) => {
        props.setSelectedCategory((prev) => 
            prev.includes(category) ? prev.filter((c) => c !== category)
            :
            [...prev, category] 
        )
    }

    const clickSize = (size:string) => {
        props.setSelectedSize((prev) => 
            prev.includes(size) ? prev.filter((s)=> s !== size)
            :
            [...prev, size] 
        )
    }

   
    return (
        <div className='flex flex-col items-center w-[500px] h-fit px-4'>
            <div  className='justify-center'>
                <h1 className='text-black text-xl font-bold '>BỘ LỌC</h1>
            </div>
            <div className='flex flex-col border-r-[1px] border-black w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-orange-500 text-xl font-bold mt-8'>LOẠI SẢN PHẨM</h1>
                </div>
                <div className='flex flex-col mx-auto'>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className=" mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="quantay"
                            defaultChecked={(props.selectedCategory.includes('Quan_Tay'))}
                            onClick={() =>clickCategory('Quan_Tay')}/>
                           
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="quantay">
                            Quần Tây
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="quanjean"
                            defaultChecked={(props.selectedCategory.includes('Quan_Jean'))}
                            onClick={() =>clickCategory('Quan_Jean')} />
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="quanjean">
                            Quần Jean
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="quanjogger" 
                            defaultChecked={(props.selectedCategory.includes('Quan_Jogger'))}
                            onClick={() =>clickCategory('Quan_Jogger')}/>
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="quanjogger">
                            Quần Jogger
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="aothun" 
                            defaultChecked={(props.selectedCategory.includes('Ao_Thun'))}
                            onClick={() =>clickCategory('Ao_Thun')}/>
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="aothun">
                            Áo Thun
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="aosomi" 
                            defaultChecked={(props.selectedCategory.includes('Ao_So_Mi'))}
                            onClick={() =>clickCategory('Ao_So_Mi')}/>
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="aosomi">
                            Áo Sơ Mi
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="aohoodie"
                            defaultChecked={(props.selectedCategory.includes('Ao_Hoodie'))}
                            onClick={() =>clickCategory('Ao_Hoodie')} />
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="aohoodie">
                            Áo Hoodie
                        </label>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <input
                            className="mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_ ] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#f59e0b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            type="checkbox"
                            value=""
                            id="aokhoacjean" 
                            defaultChecked={(props.selectedCategory.includes('Ao_Khoac_Jean'))}
                            onClick={() =>clickCategory('Ao_Khoac_Jean')}/>
                        <label
                            className="ml-[45px] text-lg hover:cursor-pointer"
                            htmlFor="aokhoacjean">
                            Áo Khoác Jean
                        </label>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-orange-500 text-xl font-bold mt-8'>GIÁ THÀNH</h1>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-5 px-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <label className='text-lg' htmlFor='min'>Giá thấp nhất</label>
                        <div className='flex flex-row justify-center items-center relative'>
                            <input type='number'
                            name='min'
                            min={0}
                            onChange={handleMinChange}
                            value={props.price.min}
                            className='outline-none border-[1px] text-center rounded-lg py-2 mt-5 focus:border-orange-500'
                            />
                            <span className='absolute ml-[120px] mt-3.5'>VNĐ</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <label className='text-lg' htmlFor='min'>Giá cao nhất</label>
                        <div className='flex flex-row justify-center items-center relative'>
                            <input type='number'
                            name='max'
                            onChange={handleMaxChange}
                            value={props.price.max}
                            className='outline-none border-[1px] text-center rounded-lg py-2 mt-5 focus:border-orange-500'
                            />
                            <span className='absolute ml-[120px] mt-3.5'>VNĐ</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-orange-500 text-xl font-bold mt-8'>SIZE</h1>
                </div>
                <div className='grid grid-cols-3 gap-10 mt-5 px-6'>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('S') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('S')}>
                        S
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('M') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('M')}>
                        M
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('L') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('L')}>
                        L
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('XL') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('XL')}>
                        XL
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('2XL') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('2XL')}>
                        2XL
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('3XL') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('3XL')}>
                        3XL
                    </button>
                    <button className={`text-center font-semibold rounded-lg py-1 border-[1px] hover:bg-orange-500 hover:text-white ${props.selectedSize.includes('4XL') ? 'bg-orange-500 text-white':''} `}
                    onClick={() => clickSize('4XL')}>
                        4XL
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter