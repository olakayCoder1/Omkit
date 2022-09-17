import React, { useState } from 'react';
import { MdDownloadForOffline , MdShoppingBasket} from 'react-icons/md';
import { TbCurrencyNaira } from 'react-icons/tb';
import {BsHeartFill } from 'react-icons/bs';
import image26 from '../../assets/image26.jpeg'

// import { client, urlFor } from '../client';

const ProductCard = ({name , price , id }) => {

  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [post, setPost] = useState(true);

  return (
    <div className="m-2  border p-2 rounded-lg bg-white">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out" >
        {image26 && (
        <img className="rounded-lg w-full " src={image26} alt="user-post" /> )}
        {/* <img className="rounded-lg w-full " src={(urlFor(image).width(250).url())} alt="user-post" /> )} */}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: '100%' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a href={`#`} download onClick={(e) => { e.stopPropagation(); }}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                ><MdDownloadForOffline />
                </a>
              </div>
            </div>
            <div className=" flex justify-between items-center gap-2 w-full">
              {post ? (
                <a
                  href={'#'}
                  target="_blank"
                  className="bg-white flex items-center gap-2 text-black font-bold p-2 rounded-full opacity-75 hover:opacity-100 hover:shadow-md"
                  rel="noreferrer"
                >
                  <BsHeartFill />
                </a>
              ) : undefined}
              {post && (
           <button type="button" onClick={(e) => { e.stopPropagation();}}
                className="bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none">
             <MdShoppingBasket />
           </button>
           )
        }
            </div>
          </div>
        )}
      </div>
      <a to={`#`} className="flex flex-col gap-[2px] mt-2 items-center overflow-hidden">
        <p className="font-medium text-sm capitalize font-headingFont text-ellipsis overflow-hidden">{name}</p>
        <div className=' flex gap-2'>
            <p className='flex items-center font-medium text-lg'>
                <TbCurrencyNaira />
                <span>{price}</span>
            </p>
            <p className='flex items-center text-xs text-gray-400 text-semibold line-through'>
                <TbCurrencyNaira />
                <span>4060</span>
            </p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;