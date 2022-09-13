import React from 'react'
import Intro from '../components/home/Intro'
import hero from '../assets/heroBg.png'
import {TbBus} from 'react-icons/tb'
import {MdAttachMoney,MdPayment} from 'react-icons/md'
import {GrValidate} from 'react-icons/gr'
import {motion} from 'framer-motion'
import TopRanking from '../components/home/TopRanking'
import Footer from '../components/Footer'



function Method({title,Icon ,description}){
    return (
        <motion.div whileHover={{scale:1.04}}
             className='w-full flex gap-2 items-center p-5 px-6 bg-white '>
            <p className=' bg-gray-100 p-2 rounded-full '><Icon className=' w-5 h-5'/></p>
            <div className=' flex flex-col w-fit'>
                <h3 className=' text-base font-bold font-headingFont hover:text-omkit'>{title}</h3>
                <p className=' text-gray-400 text-xs font-normal'>{description}</p>
            </div>
        </motion.div>
    )
}

function HomePage() {
  return (
    <div className=' bg-red w-full ' >
      <Intro />
      <div className='w-full p-2 lg-p-4 :bg-white grid grid-cols-1 md:grid md:grid-cols-2 lg:flex rounded-lg'>
        <Method title='Great value items' description="There 's always something on sale!" Icon={GrValidate}/>
        <Method title='Worry-free shopping' description="Every order has Buyer Protection coverage" Icon={MdAttachMoney}/>
        <Method title='Safe payment' description="Pay with the world's top payment methods" Icon={MdPayment}/>
        <Method title='Worldwide delivery' description="What you want, delivered to where you want" Icon={GrValidate}/>
      </div>
      <TopRanking />
    </div>
  )
}

export default HomePage



