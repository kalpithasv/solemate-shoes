import React from 'react';
import shoe from '../assets/1.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="outline outline-2 absolute top-[2.5rem] flex justify-between flex-col -left-[14rem] w-[15rem] h-[18rem] p-2 rounded-lg z-50 bg-white">
      <div className="overflow-y-scroll flex flex-col space-y-2 rounded-lg scrollbar-hide  items-center">
        {/* Shoe 1 */}
        <div className="flex items-center  space-x-2 rounded-lg ">
          <div className="block">
            <img
              src={shoe}
              alt="shoeimg"
              className="h-18 w-24 object-cover rounded-lg "
            />
          </div>
          <div className="">
            <h1>Nike pegasus </h1>
            <div className="flex space-x-3 ">
              <h1>160$</h1>

              <h1 className="flex space-x-1">
                <span>x</span>
                <span>5</span>
              </h1>
            </div>
          </div>
        </div>
        {/* Shoe 2 */}
        <div className="flex items-center  space-x-2 rounded-lg  ">
          <div className="block">
            <img src={shoe} alt="shoeimg" className="h-18 w-24 rounded-lg" />
          </div>
          <div>
            <h1>Nike pegasus</h1>
            <div className="flex space-x-3 ">
              <h1>160$</h1>

              <h1 className="flex space-x-1">
                <span>x</span>
                <span>5</span>
              </h1>
            </div>
          </div>
        </div>
        {/* Shoes 3 */}
        <div className="flex items-center space-x-2 rounded-lg ">
          <div className="block">
            <img src={shoe} alt="shoeimg" className="h-18 w-24 rounded-lg" />
          </div>
          <div>
            <h1>Nike pegasus</h1>
            <div className="flex space-x-3 ">
              <h1>160$</h1>

              <h1 className="flex space-x-1">
                <span>x</span>
                <span>5</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Link to="/shop">
        <div className="mt-2">
          <button className="bg-gradient-to-r from-blue-500 to-blue-200    w-full py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
