import React from 'react';
import Header from '../components/Header';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import { FaAward,FaBusinessTime } from "react-icons/fa";
import { MdPriceCheck } from "react-icons/md";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div class="py-24 flex items-center justify-center bg-[#eeeeee] space-x-8">
        <div className="flex px-10 justify-center items-center md:w-1/2 w-full ">
        
        <div className="w-[25rem] h-[25rem] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  rounded-full  relative ">
           <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
           <img src={home1} className="scale-[300%] rotate-[30deg]" alt="" />
        </div>
          </div>
          
        </div> 
        </div>
     
      <div className="px-15 justify-center items-center ">
        <div className="text-4xl text-black font-bold flex flex-wrap">
          Know About Best <br />
          Feature in shoes.
        </div>
        <br />
        <div className="text-black text-md">
            <span className="leading-2">
            Running shoes have a number of benefits,They can improve your <br />
            foot strength and flexibility, help you maintain better posture
            </span>
        </div>
            <br />
        <div className="text-2xl text-black font-bold">
            <span className="leading-2">
            <FaAward size="2.5rem" />Best Quality Shoes
            </span>
        </div>
        <div className="text-black text-md">
            <span className="leading-2">
            We can say with confidence that the top two best shoe<br />
            brands are Nike and Adidas
            </span>
        </div>
          <br />
          <div className="text-2xl text-black font-bold">
            <span className="leading-2">
            <FaBusinessTime size="2.5rem" />Long Lasting Shoes
            </span>
        </div>
        <div className="text-black text-md">
            <span className="leading-2">
            We can say with confidence that the top two best shoe<br />
            brands are Nike and Adidas
            </span>
        </div>
          <br />
          <div className="text-2xl text-black font-bold">
            <span className="leading-2">
            <MdPriceCheck size="2.5rem" />Best Price Range
            </span>
        </div>
        <div className="text-black text-md">
            <span className="leading-2">
            We can say with confidence that the top two best shoe<br />
            brands are Nike and Adidas
            </span>
        </div>    
       <div class="py-3 flex items-right justify-right bg-[#eeeeee] ">
       
       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
         <div class="rounded overflow-hidden bg-transparent">
      {/* <img class="w-full" src={home2} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Cortez</div>
        <p class="text-gray-700 text-base">
        high performance, comfortable sports shoes, Boots the groundbreaking materials and innovative with new technology.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
             </div>   
                </div>
    
    
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={home3} alt="" />
      {/* <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Air Force</div>
        <p class="text-gray-700 text-base">
        high performance, comfortable sports shoes, Boots the groundbreaking materials and innovative with new technology.
        </p>
      </div> */}
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div> */}
     </div>

  
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={home4} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Blazers</div>
        <p class="text-gray-700 text-base">
        high performance, comfortable sports shoes, Boots the groundbreaking materials and innovative with new technology.
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div> */}
    </div>
  </div>
      </div>       
      </div>
           
        
        
        
        
     
      
  );
};

export default Home;
