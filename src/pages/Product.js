import React from 'react';
import shoeImg from '../assets/nikeimg.png';
import { BsPlus, BsDash } from 'react-icons/bs';

const Product = () => {
  return (
    <div className=" h-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row space-y-5 md:space-x-5">
      <div className="py-16 flex items-center justify-center md:flex-1 md:items-start">
        <img
          src={shoeImg}
          alt="product"
          className="-rotate-[30deg] w-auto md:max-h-[20rem] h-[12rem] md:h-auto md:p-5 drop-shadow-lg object-fit"
        />
      </div>
      <div className="flex flex-col space-y-7 flex-1">
        <div className="flex flex-col space-y-2">
          <h2 className="text-gray-800 font-bold text-2xl">Nike Pegasus 38</h2>
          <p className="text-base">⭐⭐⭐⭐⭐</p>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            egestas ipsum ac mauris fringilla aliquet. Donec tempus arcu eget
            nunc viverra gravida. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse id dapibus leo.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-gray-800 font-bold text-2xl">Size</p>
          <div className="flex space-x-2">
            <button className="bg-blue-500 w-10 h-10 text-white text-base  rounded-md text-center">
              7
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white text-center rounded-md">
              8
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white text-center rounded-md">
              9
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white px-2 py-1 rounded-md">
              9
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white text-center rounded-md">
              10
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white text-center  rounded-md">
              11
            </button>
            <button className="bg-blue-500 w-10 h-10 text-white text-center rounded-md">
              12
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full items-center space ">
          <p className="font-bold text-2xl">160 $</p>
          <div className=" flex outline outline-2 outline-blue-500 items-center space-x-5 rounded-md px-2 py-2 ">
            <button className="p-1  bg-blue-500  text-white text-xl rounded-md">
              <BsDash />
            </button>
            <p className="text-base text-gray-800 flex ">10</p>
            <button className="p-1  bg-blue-500  text-white text-xl rounded-md ">
              <BsPlus />
            </button>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <button className="text-xl w-full bg-blue-400 px-4 py-2 rounded-md text-white">
            Buy Now
          </button>
          <button className="text-xl w-full outline outline-2 outline-blue-400  hover:bg-blue-400/20 px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
