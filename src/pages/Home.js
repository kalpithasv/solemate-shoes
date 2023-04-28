import React from 'react';
import Header from '../components/Header';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import { FaAward, FaBusinessTime } from 'react-icons/fa';
import { MdPriceCheck } from 'react-icons/md';
const Home = () => {
  return (
    <div className="overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#eee]">
      <Header />
      {/* Banner */}
      <div class="flex flex-col space-y-[7rem] pt-[7rem]">
        <div className="flex ">
          <div className="relative w-1/2 flex items-center justify-center">
            <div className="w-[26rem] h-[26rem] bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full  hover:bg-gradient-to-bl -z-5"></div>
            <img src={home1} alt="" className="z-50 rotate-[25deg] scale-105" />
          </div>
          <div className="w-1/2 flex flex-col space-y-8">
            <div className="text-4xl  text-black font-bold flex flex-col ">
              <span>Know About Best Feature </span>
              <span>in shoes.</span>
            </div>

            <div className="text-black text-md">
              <span className="leading-2">
                Running shoes have a number of benefits,They can improve your
                foot strength and flexibility, help you maintain better posture
              </span>
            </div>
            <div className="flex flex-col space-y-5">
              <div className=" text-black flex space-x-5">
                <FaAward className="text-[4rem]" />
                <div className="flex flex-col space-y-2">
                  <span className="leading-2  text-2xl font-semibold">
                    Best Quality Shoes
                  </span>
                  <span className="leading-2">
                    We can say with confidence that the top two best shoe brands
                    are Nike and Adidas
                  </span>
                </div>
              </div>
              <div className=" text-black flex space-x-5">
                <FaBusinessTime className="text-[4rem]" />
                <div className="flex flex-col space-y-2">
                  <span className="leading-2  text-2xl font-semibold">
                    Long Lasting Shoes
                  </span>
                  <span className="leading-2">
                    We can say with confidence that the top two best shoe brands
                    are Nike and Adidas
                  </span>
                </div>
              </div>
              <div className=" text-black flex space-x-5">
                <MdPriceCheck className="text-[5rem]" />
                <div className="flex flex-col space-y-2">
                  <span className="leading-2  text-2xl font-semibold">
                    Best Price Range
                  </span>
                  <span className="leading-2">
                    We can say with confidence that the top two best shoe brands
                    are Nike and Adidas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our best Collection */}
        <div className="flex flex-col space-y-28">
          <h1 className="text-4xl font-bold text-center ">
            Our Best Collections
          </h1>
          <div className="flex flex-wrap gap-y-36 space-x-10 py-10 w-full justify-center">
            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>

            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>
            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>
            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>
            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>
            <div className="flex flex-col w-[15rem] h-[9rem] shadow-lg  px-4 relative rounded-xl group cursor-pointer">
              <img
                className="w-full -translate-y-[50%] rotate-12 group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={home4}
                alt="Shoes"
              />
              <div className="flex flex-col absolute bottom-0 left-[50%] -translate-x-1/2 w-full items-center justify-center py-3">
                <p class="font-bold text-xl text-center ">Nike Air Max 270</p>
                <p> ⭐⭐⭐⭐⭐</p>
                <p> $ 150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
