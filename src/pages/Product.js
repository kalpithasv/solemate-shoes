import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ShoeID = location.pathname.split('/')[2];
  const { name, imageURL, price } = useSelector(
    (state) => state.products.shoeData[ShoeID - 1]
  );

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(7);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const item = {
      id: ShoeID,
      name,
      imageURL,
      price,
      quantity,
      size,
    };

    dispatch(cartActions.addItemToCart(item));
    setSize(7);
    setQuantity(1);
  };

  return (
    <div className=" h-full min-h-screen max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row space-y-5 md:space-x-5">
      <div className=" flex items-center justify-center md:flex-1 md:items-start">
        <img
          src={imageURL}
          alt="product"
          className=" max-h-[20rem] w-full object-cover"
        />
      </div>
      <div className="flex flex-col space-y-7 flex-1">
        <div className="flex flex-col space-y-2">
          <h2 className="text-gray-800 font-bold text-2xl">{name}</h2>
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
            <button
              onClick={() => setSize(7)}
              className={`${
                size === 7
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              7
            </button>
            <button
              onClick={() => setSize(8)}
              className={`${
                size === 8
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              8
            </button>
            <button
              onClick={() => setSize(9)}
              className={`${
                size === 9
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              9
            </button>

            <button
              onClick={() => setSize(10)}
              className={`${
                size === 10
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              10
            </button>
            <button
              onClick={() => setSize(11)}
              className={`${
                size === 11
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              11
            </button>
            <button
              onClick={() => setSize(12)}
              className={`${
                size === 12
                  ? 'bg-blue-500 text-white'
                  : 'outline outline-2 outline-blue-500'
              }  w-10 h-10  text-base  rounded-md text-center`}>
              12
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full items-center space ">
          <p className="font-bold text-2xl">{price} $</p>
          <div className=" flex outline outline-2 outline-blue-500 items-center space-x-5 rounded-md px-2 py-2 ">
            <button
              onClick={() => handleDecrement()}
              className="p-1  bg-blue-500  text-white text-xl rounded-md">
              <BsDash />
            </button>
            <p className="text-base text-gray-800 flex ">{quantity}</p>
            <button
              onClick={() => handleIncrement()}
              className="p-1  bg-blue-500  text-white text-xl rounded-md ">
              <BsPlus />
            </button>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <button className="text-xl w-full bg-blue-400 px-4 py-2 rounded-md text-white">
            Buy Now
          </button>
          <button
            onClick={() => addToCart()}
            className="text-xl w-full outline outline-2 outline-blue-400  hover:bg-blue-400/20 px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
