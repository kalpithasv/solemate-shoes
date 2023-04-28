/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { Checkbox } from 'primereact/checkbox';
import { Slider } from 'primereact/slider';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Shop = () => {
  const { shoeData } = useSelector((state) => state.products);
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [filteredGender, setFilteredGender] = useState('All');
  const [filteredPrice, setFilteredPrice] = useState([0, 100]);
  const [filteredShoes, setFilteredShoes] = useState([]);

  const filterShoes = () => {
    return shoeData?.filter((shoe) => {
      const isWithinPriceRange =
        shoe.price >= filteredPrice[0] * 3 &&
        shoe.price <= filteredPrice[1] * 3;
      const isMatchingCategory =
        filteredCategory === 'All' ||
        shoe.category.toLowerCase() === filteredCategory.toLowerCase();
      const isMatchingGender =
        filteredGender === 'All' ||
        shoe.gender.toLowerCase() === filteredGender.toLowerCase();

      return isWithinPriceRange && isMatchingCategory && isMatchingGender;
    });
  };

  useEffect(() => {
    setFilteredShoes(filterShoes());
  }, [filteredPrice, filteredCategory, filteredGender, shoeData]);

  return (
    <div className="pl-6 lg:pl-8 pr-0  h-[calc(100vh-4rem)]  ">
      <div className="grid grid-cols-13   text-black text-xl  gap-10 ">
        <div className=" col-span-3  shadow-md   my-6 h-[calc(100vh-7rem)] overflow-y-scroll scrollbar-hide bg-gray-200 px-4 rounded-lg">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-center pb-6">Filters</h1>
            <div className="flex flex-col space-y-10">
              {/* Gender */}
              <div className="flex flex-col space-y-5">
                <h2 className="text-xl font-bold ">Gender</h2>
                <div className="flex flex-col space-y-3">
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredGender('All')}
                      checked={filteredGender === 'All'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      All
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredGender('Men')}
                      checked={filteredGender === 'Men'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Mens
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredGender('Women')}
                      checked={filteredGender === 'Women'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Womens
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredGender('Kids')}
                      checked={filteredGender === 'Kids'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Kids
                    </label>
                  </div>
                </div>
              </div>
              {/* Price Range */}
              <div className="flex flex-col space-y-5">
                <h2 className="text-xl font-bold ">Price Range</h2>
                <div className="flex justify-between">
                  <div>
                    <span className="text-lg font-bold">Min: </span>
                    <span className="text-lg font-bold">
                      {filteredPrice[0] * 3}$
                    </span>
                  </div>
                  <div>
                    <span className="text-lg font-bold">Max: </span>
                    <span className="text-lg font-bold">
                      {filteredPrice[1] * 3}$
                    </span>
                  </div>
                </div>
                <div className="card flex justify-content-center w-full">
                  <Slider
                    value={filteredPrice}
                    onChange={(e) => setFilteredPrice(e.value)}
                    className="w-full"
                    range
                  />
                </div>
              </div>
              {/* Category */}
              <div className="flex flex-col space-y-5">
                <h2 className="text-xl font-bold ">Category</h2>
                <div className="flex flex-col space-y-3">
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredCategory('All')}
                      checked={filteredCategory === 'All'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      All
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredCategory('Running')}
                      checked={filteredCategory === 'Running'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Running
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredCategory('Football')}
                      checked={filteredCategory === 'Football'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Football
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredCategory('Casual')}
                      checked={filteredCategory === 'Casual'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Casual
                    </label>
                  </div>
                  <div className="card flex space-x-2 ">
                    <Checkbox
                      onChange={(e) => setFilteredCategory('Formal')}
                      checked={filteredCategory === 'Formal'}></Checkbox>
                    <label className="p-checkbox-label" htmlFor="cb1">
                      Formal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10  mx-auto overflow-y-scroll  pb-6 pr-3 h-[calc(100vh-4.25rem)] ">
          <div className="flex flex-col space-y-3 py-6">
            <h1 className="text-5xl captilize drop-shadow  ">
              Explore Your Shoes
            </h1>
            <p className="text-lg text-gray-600">
              Get the best deal on your favorite shoes
            </p>
          </div>
          <div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pr-5">
              {filteredShoes?.map((shoe) => (
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
