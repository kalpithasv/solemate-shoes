/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../components/Header';
import home1 from '../assets/home1.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import arr1 from '../assets/curly-arrow.svg';
import logo from '../assets/nikeimg.png';
import { FaAward, FaBusinessTime } from 'react-icons/fa';
import { MdPriceCheck } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
  const shoes = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike React Miler',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      price: 130,

      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'Nike Air Zoom Pegasus 37',
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      price: 120,

      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg',
      slug: 'nike-air-zoom-pegasus-37',
    },
    {
      id: 4,
      name: 'Nike Joyride Run Flyknit',
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      price: 180,

      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg',
      slug: 'nike-joyride-run-flyknit',
    },
    {
      id: 5,
      name: 'Nike Mercurial Vapor 13 Elite FG',
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      price: 250,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg',
      slug: 'nike-mercurial-vapor-13-elite-fg',
    },
    {
      id: 6,
      name: 'Nike Phantom Vision Elite Dynamic Fit FG',
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg',
      slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    },
  ];
  return (
    <div className="bg-[#eee]">
      <Header />
      {/* Banner */}
      <div class="flex flex-col space-y-[7rem] pt-[7rem] overflow-x-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#eee]">
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
      <div className="flex justify-center mx-auto pt-5 px-4 my-[7rem] bg-[#eee]">
        <div className="flex gap-[5rem] max-w-7xl p-5 py-[5rem]">
          {/* Image */}
          <div className="relative w-1/2 flex items-center justify-center ">
            <div className="w-[23rem] h-[23rem] bg-gradient-to-bl from-orange-600 via-orange-400 to-yellow-300 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full  -z-5"></div>
            <img src={home3} alt="" className="z-50  scale-[85%]" />
            <div className="absolute -top-[3rem] -right-[8rem]">
              <div class="relative h-70 w-70">
                <div class="box-border relative  px-8 py-4 border-1 bg-gradient-to-r from-gray-100 to-gray-600   rounded-xl h-50 w-50 text-gray-900 font-bold scale-90">
                  <p>Hi, I'm Cortex </p>
                  <p>Best selling running shoe</p>
                  <p> ⭐⭐⭐⭐⭐</p>
                  <p> $ 150</p>
                  <div class="absolute -bottom-[15rem] -left-[9rem]">
                    <img src={arr1} alt="" className="z-50  scale-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wording */}
          <div className="w-1/2 flex flex-col space-y-10 pl-[7rem] justify-center ">
            <div className="text-4xl   font-bold flex flex-col leading-1">
              <span>We Provide High </span>
              <span>Quality Footwear.</span>
            </div>

            <div className=" text-md">
              <span className="leading-2">
                We know that shopping online can sometimes be a hassle, which is
                why we offer free shipping, easy returns, and responsive
                customer support. Our goal is to make your experience as
                enjoyable and stress-free as possible, so you can focus on
                finding the perfect pair of shoes.
              </span>
            </div>
            <Link to={'/shop'}>
              <button className="bg-gradient-to-r opacity-90 w-fit from-indigo-700 via-blue-600 to-blue-400    shadow-purple-500/50  duration-200 transition-all  px-10 py-3 rounded  font-bold text-white hover:shadow-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* grid */}

      <div className="grid grid-cols-3 h-[30rem]  gap-4 max-w-4xl mx-auto mb-[10rem]">
        {shoes.map((shoe, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={shoe.imageURL}
              alt={shoe.name}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="bg-[#111]">
        <div className="flex max-w-7xl mx-auto justify-between px-4 py-[5rem]">
          <div className=" flex flex-col space-y-2">
            <div className=" w-[5rem]">
              <img className="object cover " src={logo} alt="Logo" />
            </div>
            <span className="text-white">SOLEMATE SHOES</span>
            <div className="text-white pt-4 flex flex-col space-y-1">
              <span>Curious to know more about us?</span>
              <span>follow out our social media</span>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#">
                <BsFacebook className="text-white text-2xl" />
              </a>
              <a href="#">
                <BsTwitter className="text-white text-2xl" />
              </a>
              <a href="#">
                <BsInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2  ">
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
      </div>
    </div>
  );
};

export default Home;
