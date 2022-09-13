import React, { useState } from "react";
import { MdShoppingBasket, MdMenu, MdLogout ,MdOutlineLogin } from "react-icons/md";
import { motion } from "framer-motion";
// https://www.youtube.com/watch?v=kmU7uX3ZHJc 
import Logo from "../../assets/omkit.png";
import userlogo from "../../assets/avatar.png";
import Avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import {BsCartDashFill} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'

const Header = () => {



  const [isMenu, setIsMenu] = useState(false);




  return (
    <header className="fixed z-50 w-screen p-2 px-4 md:p-3 md:px-16 border-b-[1px] bg-white">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full md:gap-2 lg:gap-0 items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-16 object-cover" alt="logo" />
        </Link>

        <form className=" w-[300px] lg:w-[400px] ">
          <input  type='text' 
          class=' w-full text-sm font-medium  text-gray-500 ring-0 border border-gray-300 focus:ring-0 focus:border-[1px] focus:border-gray-300 placeholder:text-gray-500 rounded-lg'
          placeholder="Search products, brands , categories"
          />
        </form>
        
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="hidden lg:block text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="hidden lg:block text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            // onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />

              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  2
                </p>
              </div>

          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 1.6 }}
              src={userlogo}
              className="w-12 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={()=> setIsMenu(!isMenu)}
            />

            {isMenu && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >
                  <p  className=" lg:hidden px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                     onClick={() => setIsMenu(false)}
                     >
                    About Us
                  </p>
                  <p  className=" lg:hidden px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                     onClick={() => setIsMenu(false)}
                     >
                    Service
                  </p>
                  <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
              >
                Sign In <MdOutlineLogin />
              </p>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
              >
                 Logout <MdLogout />
              </p>
              
              </motion.div>

            )}
             
          </div>
        </div>
      </div>
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div className="relative flex items-center justify-center" >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                2  
              </p>
            </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={userlogo}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={()=> setIsMenu(!isMenu)}
          />
          {isMenu && (
              <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Product
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
              >
                Sign In <MdOutlineLogin />
              </p>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
          

        </div>
      </div>
    </header>
  );
};

export default Header;
