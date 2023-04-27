import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {
  const { shoeData } = useSelector((state) => state.products);

  return (
    <div className="text-black text-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <h1 className="text-center py-4">Shop</h1>
      <div className="flex flex-wrap gap-5">
        {shoeData.map((shoe) => (
          <ProductCard
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            price={shoe.price}
            imageURL={shoe.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
