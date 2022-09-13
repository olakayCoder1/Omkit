import React from 'react'
import TopProduct from './TopProduct'
import image4 from '../../assets/image4.jpeg'



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
  return (
    <div className=' w-full h-full bg-white my-12 rounded-lg px-2 md:px-6 lg:p-12'>
        <div className=' w-full flex items-center place-content-center text-center py-12'>
            <h2 className='w-fit text-center text-xl font-bold font-headingFont  hover:underline hover:underline-offset-1 hover:text-omkit'>Featured collection</h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
        </div>
    </div>
  )
}

export default TopRanking
