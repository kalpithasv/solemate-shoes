import React from 'react';
import NikeImg from '../assets/nikeimg.png';

const Header = () => {
  return (
    <div>
      <div className="bg-[#eee] w-full overflow-hidden min-h-[90vh] relative flex">
        <div className="absolute flex-shrink-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-[36%] xs:scale-[47%] sm:scale-[55%] md:scale-75 2xl:scale-100 flex">
          <img
            src={NikeImg}
            alt="nike shoes"
            className="-rotate-[35deg] rounded-full fliter drop-shadow-2xl absolute top-[50%] left-[50%] -translate-x-[52%] -translate-y-[60%] h-[16rem] object-cover z-20 scale-125 xs:scale-100"
          />
          <h1 className=" text-[25rem] flex text-white text-center uppercase font-[600] xl:tracking-[-0.02rem] z-10 tracking-wide">
            nike
          </h1>

          <div className="absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-10 scale-125 md:scale-100">
            <div className="relative">
              <div className="w-[30rem] h-[30rem] rounded-[20%] rounded-l-full blur-3xl opacity-30 bg-red-300 absolute -translate-x-[100%] -translate-y-[45%] mix-blend-multiply"></div>
              <div className="w-[30rem] h-[35rem] rounded-[40%] bg-indigo-400 absolute -translate-x-[50%] -translate-y-[40%] blur-3xl opacity-30 mix-blend-multiply"></div>
              <div className="w-[30rem] h-[30rem] rounded-full bg-green-200 absolute translate-x-[12%] -translate-y-[40%] blur-3xl opacity-20 mix-blend-multiply"></div>
              <div className="w-[26rem] h-96 rounded-[40%] bg-blue-400 absolute translate-x-[10%]  -translate-y-[50%] blur-3xl opacity-20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
