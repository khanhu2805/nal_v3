'use client'
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
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
        <div className="mb-10 w-screen"> 
            <h2 className="text-xl font-bold w-screen mt-10 text-center">TẤT CẢ SẢN PHẨM</h2>
            <div className="h-fit w-96 mx-auto mt-10">
                <SearchBar/>
            </div>
            <div className='flex flex-row mt-20 h-fit '>
                <div className="basis-2/5 flex flex-row ">
                    <Filter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    price={price}
                    setPrice={setPrice}/>
                </div>
                <div className="basis-3/5 grid grid-cols-3 gap-2">
                    {response.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
