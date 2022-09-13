import React from 'react'
import ProductCard from '../components/home/ProductCard'
import ProductCategory from '../components/products/ProductCategory'


function AllProducts() {
  return (
    <div className=' flex gap-6 flex-col'>
      {/* <ProductCard /> */}
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
    </div>
  )
}

export default AllProducts
