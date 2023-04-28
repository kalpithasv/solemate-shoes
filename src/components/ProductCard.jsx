import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, imageURL }) => {
  return (
    <Link to={`/shop/${id}`}>
      <div
        id={id}
        className="rounded-lg shadow-lg cursor-pointer overflow-hidden bg-[#eee] w-[20rem] ">
        <div className="overflow-hidden">
          <img
            className="object-cover w-full  h-[15rem]  rounded-lg hover:scale-105 transition duration-500 ease-in-out"
            src={imageURL}
            alt="shoe-img"
          />
        </div>

        <div className="p-4 ">
          <h4 className="text-xl text-center font-semibold tracking-tight text-blue-600">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
