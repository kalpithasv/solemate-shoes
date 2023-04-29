import React from 'react';
import Header from '../components/Header';
import home1 from '../assets/home1.png';
import home4 from '../assets/home4.png';
import arr1 from '../assets/arr1.png';
import logo from '../assets/nikeimg.png';
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
    {/* Banner 2 */}
    <div className="overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-r from-black via-gray-800 to-black"> 
      <div className="flex flex-col space-y-20">
      <div className="flex ">
          <div className="relative w-1/2 flex items-bottom justify-center">
            <div className="w-[20rem] h-[20rem] bg-gradient-to-bl from-orange-600 via-orange-400 to-yellow-300 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full hover:bg-gradient-to-br -z-5"></div>
            <img src={home3} alt="" className="z-50 rotate-[5deg] scale-50" />
          </div>
          <div className="w-1/2 flex flex-col space-y-10 space-x-25">
            <div className="text-4xl  text-white font-bold flex flex-col leading-1">
              <span>We Provide High </span>
              <span>Quality Footwear.</span>
            </div>

            <div className="text-white text-md">
              <span className="leading-2">
              We know that shopping online can sometimes be a hassle, 
              which is why we offer free shipping, easy returns, and responsive customer support.
              Our goal is to make your experience as enjoyable and stress-free as possible,
              so you can focus on finding the perfect pair of shoes.
              </span>
            </div>
            <button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80  px-4 py-2 rounded text-gray-900 font-bold">
                Shop Now
            </button>
          </div>
        </div>
      </div>
      <div class="relative h-70 w-70">
          <div class="absolute -top-20 right-70 left-40 h-50 w-50">
             <img src={arr1} alt="" className="z-50 rotate-[-35deg] scale-105 float-left" />
             
          </div>
          <div class="box-border h-50 w-80 p-10 border-1 bg-gradient-to-r from-gray-100 to-gray-600 hover:bg-gradient-to-bl -z-5 rounded-xl absolute -top-10 right-40 left-30 h-50 w-50 text-gray-900 font-bold">
             <p>Hi, I'm Cortex </p>
             <p>Best selling running shoe</p>
              <p> ⭐⭐⭐⭐⭐</p>
              <p> $ 150</p>
          </div>
    </div>
    
    </div>
    {/* grid */}
    <div className="overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#eee] "> 
    <br />
    <br />
    <br />
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
    </div>
</div>
    </div> 
    {/* Footer */}  
    <br />
    <br /> 
    <div className="grid grid-cols-2 bg-[#1E242B] rounded-3xl mx-25 mb-15">
        <div className="px-10 py-8">
          <div className="flex-shrink-0 flex items-center justify-start flex-1 leading-3 font-bold flex text-2xl m-2">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>
            <span className="text-white">SOLEMATE SHOES</span>
          </div>
          <div className="text-white pt-8">
            Curious to know more about us?
            <br /> follow out our social media
          </div>
          <div></div>
        
       <div className="grid grid-cols-2 mx-4 my-3 py-8">
          <div className="">
            <div className="font-semibold text-white pb-4">OUR POLICIES</div>
            <div className="text-white py-2">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="text-white py-2">
              <a href="#">Term of Use</a>
            </div>
            <div className="text-white py-2">
              <a href="#">Term of Order</a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white pb-4">CONTACT US ON</div>
            <div className="text-white py-2">
              <a href="tel:7418692714">+91 7418692714</a>
            </div>
            <div className="text-white py-2">
              <a href="#">solemateshoes@gmail.com</a>
            </div>
          </div>
        </div>
     </div>
     <br />
</div>
    
  );
};

export default Home;
