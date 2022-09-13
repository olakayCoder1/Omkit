import React, { useEffect } from 'react'
import logo1 from '../../assets/kitchen1.jpeg'
import logo2 from '../../assets/homeDeco.jpeg'
import logo3 from '../../assets/image38.jpeg'
import logo4 from '../../assets/image46.jpeg'
import IntroLeft from './IntroLeft'
import { motion } from "framer-motion";




const productSlides = [
  {
      'image': logo1,
      'id': 1
  },
  {
      'image': logo2,
      'id': 2
  },
  {
      'image': logo3,
      'id':3
  },
  {
    'image': logo4,
    'id':4
},
]


function Intro() {

  useEffect(()=>{

    let current = 0 ;
    setInterval(()=>{
      let slides = document.getElementById('slideIntro')
      if(current === 4 ){
        current = 1
        slides.style.backgroundImage = `url(${productSlides[current - 1 ].image}`
      }else{
        current = productSlides[current].id
        slides.style.backgroundImage = `url(${productSlides[current - 1].image}`
      }
    },2000)

    // return () => clearInterval(current)
  },[])

  return (
    <div className=' w-full md:h-4/6 flex flex-col md:flex-row gap-3 items-center'>
        <div className='w-4/6 flex flex-col gap-3 py-2 md:p-6 '>
            <h2 className=' text-5xl  font-headingFont text-black'>HOUSEHOLD, KITCHEN & SOUVENIRS</h2>
            <p className=' font-medium text-base'>Your No1 homeware store where you can get luxury home interior at affordable prices</p>
            <p className=' p-2 px-6 bg-omkitBg w-fit text-white cursor-pointer '>Explore</p>
        </div>
        <div className="h-[350px] md:w-2/6 max-h-[400px]  md:h-full bg-white"  >
          <div id='slideIntro' className='w-full h-full bg-center bg-cover bg-no-repeat rounded-2xl' style={{ backgroundImage : `url(${logo3})`}}> 
            {/* <img src={logo1} className='w-full h-full  rounded-2xl' />  */}
          </div>
        </div>
    </div>
  )
}

export default Intro
