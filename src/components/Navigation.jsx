import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBag, BsHeart, BsXLg, BsList } from 'react-icons/bs';
import '../index.css';

import logo from '../assets/nikeimg.png';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const categories = [
    { name: 'Mens', href: '/shop/mens' },
    { name: 'Womens', href: '/shop/womens' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'Sneakers', href: '/shop/sneakers' },
  ];

  return (
    <nav className="bg-[#eee] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-16 z-10">
          <div className="flex-shrink-0 flex items-center justify-start flex-1">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-center  space-x-10 flex-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-gray-700  desktop-main-menu  py-2 rounded-md text-sm font-medium">
                {category.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 py-2 justify-end flex-1">
            <Link
              to="/cart"
              className=" text-base block font-medium  text-gray-700 hover:text-gray-900 ">
              <BsBag className="h-6 w-6 z-10 blur-0 fliter drop-shadow-lg" />
            </Link>
            <Link
              to="/wishlist"
              className=" text-base block font-medium text-gray-700 hover:text-gray-900 ">
              <BsHeart className="h-6 w-6 mt-[1px] fliter drop-shadow-lg " />
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex justify-between md:hidden">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none ">
              {isMobileMenuOpen ? (
                <BsXLg className="h-6 w-6" />
              ) : (
                <BsList className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-6 pt-2 pb-3  flex flex-col  space-y-1 ">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="text-gray-700 w-fit desktop-main-menu  py-2 rounded-md text-sm font-medium">
              {category.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 px-6 border-t flex flex-col space-y-4  border-gray-200">
          <Link
            to="/cart"
            className=" text-base  font-medium space-x-3 text-gray-700 hover:text-gray-900 flex items-center ">
            <BsBag className="h-6 w-6 z-10 " />
            <span className="desktop-main-menu">Cart</span>
          </Link>
          <Link
            to="/cart"
            className=" text-base  font-medium space-x-3 text-gray-700 hover:text-gray-900 flex items-center ">
            <BsHeart className="h-6 w-6 z-10 " />
            <span className="desktop-main-menu">Wishlist</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
