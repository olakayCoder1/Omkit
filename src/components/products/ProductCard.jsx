import React , {useState} from 'react'
import image21 from '../../assets/image21.jpeg'
import image22 from '../../assets/image22.jpeg'
import image23 from '../../assets/image23.jpeg'
import image24 from '../../assets/image24.jpeg'
import image25 from '../../assets/image25.jpeg'






const Sdata = {
    shopItems: [
      {
        id: 7,
        cover: image21,
        name: "Mapple Earphones",
        price: "180",
        discount: "25",
      },
      {
        id: 8,
        cover: image22,
        name: "Vivo android one",
        price: "120",
        discount: "10",
      },
      {
        id: 9,
        cover: image23,
        name: "Sony Light",
        price: "20",
        discount: "50 ",
      },
      {
        id: 10,
        cover: image24,
        name: "Iphone",
        price: "999",
        discount: "10 ",
      },
      {
        id: 11,
        cover: image25,
        name: "Ceats wireless earphone",
        price: "80",
        discount: "20 ",
      },
      {
        id: 12,
        cover:image21,
        name: "Redimi Phone",
        price: "400",
        discount: "20 ",
      },
      {
        id: 13,
        cover: image22,
        name: "Xeats Bluetooth earphones",
        price: "60",
        discount: "5 ",
      },
      {
        id: 14,
        cover: image23,
        name: "Airpod",
        price: "120",
        discount: "10",
      },
      {
        id: 15,
        cover: image24,
        name: "Silver Cap",
        price: "5",
        discount: "2",
      },
    ],
  }




function ProductCard() {
    const ShopCart = ({ shopItems, addToCart }) => {
        const [count, setCount] = useState(0)
        const increment = () => {
          setCount(count + 1)
        }
      
        return (
          <>
            {shopItems.map((shopItems, index) => {
              return (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <span className='discount'>{shopItems.discount}% Off</span>
                      <img src={shopItems.cover} alt='' />
                      <div className='product-like'>
                        <label>{count}</label> <br />
                        <i className='fa-regular fa-heart' onClick={increment}></i>
                      </div>
                    </div>
                    <div className='product-details'>
                      <h3>{shopItems.name}</h3>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='price'>
                        <h4>${shopItems.price}.00 </h4>
                        {/* step : 3  
                           if hami le button ma click garryo bahne 
                          */}
                        <button onClick={() => addToCart(shopItems)}>
                          <i className='fa fa-plus'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )

}
};

export default ProductCard
