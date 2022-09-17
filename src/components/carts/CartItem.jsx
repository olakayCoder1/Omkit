import React, {  useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import image21 from '../../assets/image27.jpeg'




const CartItem = ({ item, setFlag, flag }) => {


  return (
    <div className="w-full p-1 px-2 rounded-lg bg-black flex items-center gap-2">
      <img
        src={image21}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">Toilet towel</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(255) * 2}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {3}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
        //   onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
