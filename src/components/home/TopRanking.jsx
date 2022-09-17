import React, { useEffect, useState } from 'react'
import image4 from '../../assets/image4.jpeg'
import {TbCurrencyNaira} from 'react-icons/tb'
import ProductCard from './ProductCard'
import { fetchProducts } from '../../contexts/utils/functions.js'
import axios from "axios";

const productSlides = [
    {
        'name':'Marc Joseph GREEN PEA 400G x1',
        'description':'productSlides is assigned a value but never used',
        'price': 5000,
        'image': image4
    },
    {
        'name':'MarcGREEN PEA 400G x1',
        'description':'productSlides is assigned a value but never used',
        'price': 7000,
        'image': image4
    },
    {
        'name':'Marc  GREEN PEA 400G x1',
        'description':'productSlides is assigned a value but never used',
        'price': 100000,
        'image': image4
    },
]





function TopRanking() {

        const [ topRankingProducts, setTopRankingProducts ] = useState([])

        useEffect(()=>{

            axios.get('https://api.escuelajs.co/api/v1/products')
            .then( res =>{
                console.log(res.data[0])
                return setTopRankingProducts(res.data)
            })
            .catch( err => {
                return []
            })
    },[])
  return (
    <div className=' w-full h-full bg-white my-12 rounded-lg px-2 md:px-6 lg:p-12'>
        <div className=' w-full flex items-center place-content-center text-center py-12'>
            <h2 className='w-fit text-center text-xl font-bold font-headingFont  hover:underline hover:underline-offset-1 hover:text-omkit'>Featured collection</h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
            {topRankingProducts  && topRankingProducts.map((item)=>{
                    return (
                        <ProductCard key={item.id} name={item.title} price={item.price} />
                    )
                })
            }
            <ProductCard />

            {topRankingProducts && <h1>olaka</h1>}
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
            
        </div>
    </div>
  )
}

export default TopRanking
