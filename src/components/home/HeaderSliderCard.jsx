import React from 'react'
import image21 from '../../assets/image21.jpeg'
import image22 from '../../assets/image22.jpeg'
import image23 from '../../assets/image23.jpeg'
import image24 from '../../assets/image24.jpeg'
import image25 from '../../assets/image25.jpeg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const Sdata = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: image21,
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: image22,
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: image23,
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: image25,
    },
  ]



function HeaderSliderCard() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
          return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
      }
      return (
        <>
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <>
                  <div className='flex items-center' key={index}>
                    <div className=' flex flex-col'>
                      <h1 className=' text-4xl font-headingFont font-bold'>{value.title}</h1>
                      <p className=' text-base font-medium'>{value.desc}</p>
                      <button className='w-fit p-3 px-12 bg-omkitBg rounded-lg text-white'>Add to cart</button>
                    </div>
                    <div className=''>
                      <img src={value.cover} alt=''  className=' max-h-96'/>
                    </div>
                  </div>
                </>
              )
            })}
          </Slider>
        </>
      )
}

export default HeaderSliderCard
