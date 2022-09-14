import React from 'react'
import image26 from '../../assets/image26.jpeg'
import {AiTwotoneStar} from 'react-icons/ai'
import { BiMinus, BiPlus } from "react-icons/bi";
import {TbCurrencyNaira} from 'react-icons/tb'
import {MdShoppingBasket} from 'react-icons/md'
import {BsHeartFill} from 'react-icons/bs'
import { motion } from "framer-motion";

function ProductDetail() {
  return (
    <div>
      <h2 className=' text-3xl font-bold font-merriweather'>Android Phones</h2>
      <div className=' grid grid-cols-1 md:grid-cols-[2fr,2fr] lg:grid-cols-[2fr,3fr] py-12 bg-white my-4 rounded-lg'>
        <div className='lg:p-8 mx-auto'>
            <img src={image26}  className='max-w-[300px]'/>
        </div>
        <div className='flex flex-col gap-2 p-5 lg:p-8'>
            <h2 className=' text-3xl font-bold font-merriweather'>Samsung Galaxy S22 Ultra - 6.8" - 512gb Rom - 12gb  Phantom Black</h2>
            <p className=' flex items-center text-omkit'>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
            </p>
            <div className=' flex gap-2 border-b py-6'>
                <p className='flex items-center  text-3xl font-bold'>
                    <TbCurrencyNaira />
                    <span>4060</span>
                </p>
                <p className='flex items-center text-sm font-medium text-gray-400 text-semibold line-through'>
                    <TbCurrencyNaira />
                    <span>4060</span>
                </p>
            </div>
            {/* button section */}
            <div className=' flex gap-4 items-center py-2'>
                <p className=' text-base font-medium border-r border-gray-600 px-4'>Quantity</p>
                <div>
                    <div className="group flex items-center gap-2 ml-auto cursor-pointer text-base">

                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className='p-2 rounded-full hover:bg-gray-200 hover:text-gray-700'
                            >
                            <BiMinus  className=" w-6 h-6 "/>
                        </motion.div>

                        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-700 flex items-center justify-center">
                            {3}
                        </p>

                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className='p-2 rounded-full hover:bg-gray-200 hover:text-gray-700'
                            //   onClick={() => updateQty("add", item?.id)}
                            >
                            <BiPlus className=" w-6 h-6 " />
                        </motion.div>
                    </div>
                </div>
                
            </div>
                
            <div className=' grid grid-cols-2 gap-2 items-center text-lg font-medium px-6'>
                <p className=' flex place-content-center gap-4  items-center bg-green-500 text-white cursor-pointer p-3 px-6 rounded-lg'>
                    <MdShoppingBasket />
                    <span className='hidden lg:flex items-center place-content-center'>Add to cart</span>
                </p>
                <p className=' flex place-content-center  items-center gap-4 bg-gray-300 cursor-pointer p-3 px-6 rounded-lg'>
                    <BsHeartFill />
                    <span className='hidden lg:flex items-center place-content-center'>Save for later</span>
                </p>
            </div>

        </div>
      </div>
      <div className=' bg-white my-4 p-6 rounded-lg'>
        <h2 className=' text-base font-bold font-merriweather'>Product detail</h2>
        <p className=' text-sm font-normal'>
            Dano Full Cream Milk also has everything you need for a real taste of home – 
            from using it to make family favourites to homemade bakes to special seasonal 
            treats. It is a reliable partner with meals like oatmeal, cereal, tea, chocolate, 
            coffee and often used as an ingredient in cooking and baking.
            Dano Full Cream Milk is simply fit to make or complete meals with your breakfast,
            lunch or dinner, or you could simply serve it ice cold in a glass. Either ways,
            Dano Full Cream Milk will help you succeed in the kitchen with fast, easy to prepare 
            recipes for everyday and special occasions
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
