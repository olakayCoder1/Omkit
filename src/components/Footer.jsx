import React from 'react'
import {BsGithub , BsFacebook , BsInstagram , BsTwitter} from 'react-icons/bs'
import omkit from '../assets/omkit.png'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className=' w-full p-6 py-12 lg:p-12 lg:pb-32 bg-black flex justify-around md:justify-start text-gray-500'>
      {/* stay connected  */}
      <div className=' flex flex-col '>
        <img src={omkit} className='w-16'/>
        <h3 className=' font-headingFont text-base font-bold'>Stay connected</h3>
        <ul className=' flex items-center'>
            <li className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsFacebook className='w-5 h-5'/></li>
            <li  className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsTwitter className='w-5 h-5'/></li>
            <li  className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsInstagram className='w-5 h-5'/></li>
            <li className='p-2 rounded-full hover:text-omkit cursor-pointer'><BsGithub className='w-5 h-5'/></li>
        </ul>
      </div>
      <div className=' grid grid-cols-2 md:grow md:flex flex-col gap-6 md:flex-row justify-evenly'>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <h2  className=' font-headingFont text-base font-bold text-gray-300 hover:text-omkit'>Payment</h2>
            <ul className=' text-xs font-normal flex flex-col gap-3 ' > 
                <li className=' hover:text-omkit cursor-pointer'>Transfer</li>
                <li className=' hover:text-omkit cursor-pointer'>Card</li>
                <li className=' hover:text-omkit cursor-pointer'>Cash</li>
            </ul>
        </div>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <h2 className=' font-headingFont text-base font-bold text-gray-300 hover:text-omkit'>Payment</h2>
            <ul className=' text-xs font-normal flex flex-col gap-3 ' > 
                <li className=' hover:text-omkit cursor-pointer'>Transfer</li>
                <li className=' hover:text-omkit cursor-pointer'>Card</li>
                <li className=' hover:text-omkit cursor-pointer'>Cash</li>
            </ul>
        </div>
        {/* payment  */}
        <div className=' flex flex-col gap-2'>
            <h2 className=' font-headingFont text-base font-bold text-gray-300 hover:text-omkit'>Payment</h2>
            <ul className=' text-xs font-normal flex flex-col gap-3 ' > 
                <li className=' hover:text-omkit cursor-pointer'>Transfer</li>
                <li className=' hover:text-omkit cursor-pointer'>Card</li>
                <li className=' hover:text-omkit cursor-pointer'>Cash</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
