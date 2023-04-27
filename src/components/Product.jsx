import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, {useState} from "react";
  
  const Product = () => {
  
  const [hoverEffects , setHoverEffects]=useState(' opacity-0')
  
  const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'
  
    function handleHoverEnter() {
      setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
  
    function handleHoverExit(){
      setHoverEffects(' opacity-0')
      }
    return (
      <div className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
        <img src={"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00d5c20e-8eec-48ac-94e1-384b8bfa5cb2/air-jordan-13-retro-shoes-xcK6vg.png"} alt="product" />
        <div className={`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` + hoverEffects}>
          <div className={iconStyle}>
            <ShoppingCartOutlined />
          </div>
          <div className={iconStyle}>
            < HeartOutlined/>
          </div>
          <div className={iconStyle}>
            <SearchOutlined />
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;