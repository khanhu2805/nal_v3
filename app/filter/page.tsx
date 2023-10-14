'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filter from '../../components/Filter';
import ProductCard from '@/components/ProductCard';

type Props = {}

const Page = (props: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedSize, setSelectedSize] = useState<string[]>([]);
    const [price, setPrice] = useState({
        min:0,
        max:500000,
    })

    const [response, setResponse] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('/api/filter', {
                    params: {
                        category: selectedCategory,
                        size: selectedSize,
                        price: {
                            min: price.min,
                            max: price.max
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                 })
                 .then((response) => {
                    console.log(response.data);
                    setResponse(response.data);
                 });
            } catch(err) {
                return console.log(err);
            }
        };
        fetchData()
    }, [selectedCategory, selectedSize, price])
  return (
    <div className='px-5 w-screen'>
        <div className='flex'>
            <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            price={price}
            setPrice={setPrice}/>
        </div>
        <div className='px-10'>
            <h1 className='py-3 text-4xl'>Filter</h1>
            <div className="basis-3/5 grid grid-cols-3 gap-2">
                    {response.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Page