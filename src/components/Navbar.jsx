import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="w-full sticky top-0 z-[999] h-[60px] bg-black/95 text-white">
        <div className="flex items-center justify-between max-w-[1250px] mx-auto px-6 h-full space-x-8">
          <div>
            <h2 className="text-2xl font-bold font-mono">BrandName</h2>
          </div>
          <div className="hidden sm:block">
            <ul className="flex space-x-5">
              <li><NavLink className={'cursor-pointer'} to={'/'}>Home</NavLink></li>
              <li><NavLink className={'cursor-pointer'} to={'/product/cat/:catId'}>Products</NavLink></li>
              <li><NavLink className={'cursor-pointer'} to={'/about'}>About</NavLink></li>
              <li><NavLink className={'cursor-pointer'} to={'/contact'}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="sm:hidden cursor-pointer">
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
              Home
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
              Products
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
              About
            </li>
            <li className="text-xl font-medium border-b pb-2 border-gray-900">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
