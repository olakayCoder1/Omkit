
import React, { Component } from "react";
import Slider from "react-slick";
import hero from '../../assets/heroBg.png'
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

function IntroLeft() {



      return (
        <div className=" w-2/6 hidden lg:block bg-center bg-cover bg-no-repeat " style={{ backgroundImage : `url(${hero})`}}>
          <h2> Single Item</h2>
          <div>
          

          </div>
          
        </div>
      );
    }


export default IntroLeft


