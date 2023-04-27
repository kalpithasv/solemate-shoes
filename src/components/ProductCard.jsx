import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, imageURL }) => {
  return (
    <Link to={`/shop/${id}`}>
      <div
        id={id}
        className="w-full rounded-lg  lg:max-w-sm shadow-lg cursor-pointer overflow-hidden bg-[#eee]">
        <div className=" object-cover overflow-hidden">
          <img
            className="object-cover w-full "
            src={imageURL}
            alt="shoe-img"
            class="rounded-lg hover:scale-105 transition duration-500 ease-in-out "
          />
        </div>

        <div className="p-4 mt-5">
          <h4 className="text-xl text-center font-semibold tracking-tight text-blue-600">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
