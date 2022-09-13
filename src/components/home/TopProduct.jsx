import React from 'react'
import image from '../../assets/image32.jpeg'
import {GrValidate} from 'react-icons/gr'
import {FcApproval} from 'react-icons/fc'
import {motion} from 'framer-motion'

function TopProduct() {

  return (
    <motion.div whileHover={{ scale:1.07}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity:1 }}
        className=' max-h-[350px] h-fit py-6 px-3 hover:border hover:border-green-200 rounded-lg'>
      <div className="w-full  mx-auto">
        <img src={image} alt='losks' className=' w-full h-full' />
      </div>
        <div className=' w-full text-center py-6'>
            <h3 className=' text-base font-bold font-headingFont'>productSlides</h3>
            <p className=' text-xl font-bold'>£3000</p>
        </div>
        {/* <div className=' absolute top-3 left-3'>
            <p className=' p-2 rounded-full bg-white'><FcApproval className=' w-5 h-5'/></p>
        </div>
        <div id='productSlides' className='absolute right-6 top-6 group-hover:text-red-600'>
            <p><GrValidate  className=' w-7 h-7'/></p>
        </div> */}
    </motion.div>
  )
}

export default TopProduct
