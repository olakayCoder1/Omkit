import React , {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../home/ProductCard';


function ProductCategory() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        
      };

  return (
    <div className=' bg-white p-2 rounded-lg'>
        <h2 className=' font-bold text-base font-headingFont'>Kettle</h2>
        <Slider {...settings}>
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
        </Slider>
      
    </div>
  )
}



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#d1d5da", border:'1px solid #58616e', borderRadius:'50%', font:'3rem' ,width:'3rem', height:'3rem', display:'flex', alignItems:'center', placeItems:'center',placeContent:'center' }}
        onClick={onClick}
      />
    );
  }


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#d1d5da", border:'1px solid #58616e', borderRadius:'50%', font:'3rem' ,width:'3rem', height:'3rem', display:'flex', alignItems:'center', placeItems:'center',placeContent:'center', zIndex:'50' }}
        onClick={onClick}
      />
    );
}




export default ProductCategory



