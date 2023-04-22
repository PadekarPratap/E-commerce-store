import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import {HiShoppingCart} from 'react-icons/hi'
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.Cart.cart)
  const navigate = useNavigate()
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="w-full sticky top-0 z-[999] h-[60px] bg-black/95 text-white">
        <div className="flex items-center justify-between max-w-[1250px] mx-auto px-6 h-full space-x-8">
          <div>
            <h2 onClick={() => navigate('/')} className="text-2xl font-bold font-mono cursor-pointer uppercase">React Store</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-5">
              <li><NavLink className={'cursor-pointer hover:text-[#da2f68]'} to={'/'}>Home</NavLink></li>
              <li><NavLink className={'cursor-pointer hover:text-[#da2f68]'} to={'/products'}>Products</NavLink></li>
              <li><NavLink className={'cursor-pointer hover:text-[#da2f68]'} to={'/about'}>About</NavLink></li>
              <li><NavLink className={'cursor-pointer hover:text-[#da2f68]'} to={'/contact'}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => navigate('/login')} className="border-2 border-black rounded-lg p-2 hover:border-white">Login</button>
            <button onClick={() => navigate('/register')} className="px-2 py-2 bg-white text-black rounded-lg">Sign Up</button>
            <div className="relative cursor-pointer">
              <div className="absolute p-[12px] top-[-10px] right-[-13px] h-[20px] w-[20px] bg-red-700 rounded-full flex items-center justify-center">{cart.length}</div>
              <HiShoppingCart size={30} />
            </div>
          </div>

          <div className="md:hidden cursor-pointer">
            <HiMenu size={30} onClick={() => setIsNavOpen(true)} />
          </div>
        </div>
      </div>
      <div
        className={
          isNavOpen
            ? "z-[1000] bg-black/90 fixed inset-0 duration-500 pointer-events-none"
            : null
        }
      ></div>

      <div
        className={
          isNavOpen
            ? "z-[1000] fixed h-full bg-black w-2/3 left-0 top-0 duration-500 text-white"
            : "fixed top-0 h-full left-[-100%] duration-500"
        }
      >
        <div className="px-5 py-[2rem]">
          <div className="mb-8 flex justify-between">
            <h2 className="text-2xl font-bold font-mono">BrandName</h2>
            <div
              className="cursor-pointer"
              role="button"
              onClick={() => setIsNavOpen(false)}
            >
              <HiOutlineXMark size={30} />
            </div>
          </div>
          <ul className="flex flex-col space-y-5">
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
            <NavLink className={'cursor-pointer'} to={'/'}>Home</NavLink>
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
            <NavLink className={'cursor-pointer'} to={'/products'}>Products</NavLink>
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
            <NavLink className={'cursor-pointer'} to={'/about'}>About</NavLink>
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
            <NavLink className={'cursor-pointer'} to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
