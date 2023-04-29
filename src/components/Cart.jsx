import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartImg from '../assets/cart.png';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="outline outline-2 absolute top-[2.5rem] flex justify-between flex-col -left-[14rem] w-[15rem] h-[18rem] p-2 rounded-lg z-50 bg-white">
      <div className="overflow-y-scroll flex flex-col space-y-2 rounded-lg scrollbar-hide  items-center">
        {items.length === 0 ? (
          <div className="text-center">
            <img src={cartImg} alt="empty cart" />
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center  space-x-2 rounded-lg ">
              <div className="block">
                <img
                  src={item.imageURL}
                  alt="shoeimg"
                  className="h-18 w-24 object-cover rounded-lg "
                />
              </div>
              <div className="">
                <h1>{item.name} </h1>
                <p>
                  <span>Size: </span> {item.size}
                </p>
                <div className="flex space-x-3 ">
                  <h1>{item.price}$</h1>

                  <h1 className="flex space-x-1">
                    <span>x</span>
                    <span>{item.quantity}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/cart">
        <div className="mt-2">
          <button className="bg-gradient-to-r opacity-90  from-indigo-700 via-blue-600 to-blue-400  text-white hover:shadow-xl transition-all duration-200 shadow-purple-500/50    w-full py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
