import React from "react";
import Prod from '../components/Prod';

const Shop = () => {
  return (
    <div class="grid grid-cols-8">
  <div class="col-span-1 bg-gray-500 p-4">
    <h2 class="text-xl font-bold mb-4">Filters</h2>
    <div class="relative">
      <select class="filter-select bg-white text-gray-900 font-medium px-2 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="Select a category">
        <option value="">All Categories</option>
        <option value="colour">Colour</option>
        <option value="price">Price</option>
        <option value="size">Size</option>
      </select>
      <svg class="w-4 h-4 absolute top-3 right-3 pointer-events-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M15.293 7.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414L14 8.414V14a1 1 0 1 0 2 0V8a1 1 0 0 0-.293-.707z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M4.707 12.707a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L6.586 9H2a1 1 0 1 0 0 2h4.586l-1.879 1.879z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="mt-4 filter-options hidden">
      <div class="filter-option" data-category="colour">
        <h3 class="font-medium mb-2">Colour</h3>
        <ul class="list-disc pl-5">
          <li>Red</li>
          <li>Blue</li>
          <li>Green</li>
          <li>Yellow</li>
        </ul>
      </div>
      <div class="filter-option" data-category="price">
        <h3 class="font-medium mb-2">Price</h3>
        <ul class="list-disc pl-5">
          <li>Under $50</li>
          <li>$50 - $100</li>
          <li>$100 - $200</li>
          <li>Over $200</li>
        </ul>
      </div>
      <div class="filter-option" data-category="size">
        <h3 class="font-medium mb-2">Size</h3>
        <ul class="list-disc pl-5">
          <li>Small</li>
          <li>Medium</li>
          <li>Large</li>
          <li>X-Large</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-span-4 content">
    <h2>Content</h2>
    <div class="flex flex-wrap">
      <div class="w-1/3" data-category="category1">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
      <div class="w-1/3" data-category="category2">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
      <div class="w-1/3" data-category="category3">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
      <div class="w-1/3" data-category="category1">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
      <div class="w-1/3" data-category="category2">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
      <div class="w-1/3" data-category="category3">
        <div class="p-4 bg-gray-100">
        <div >
          <Prod/>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
   
    

 
    
   
  );
};
export default Shop;