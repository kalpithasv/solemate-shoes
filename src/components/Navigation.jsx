import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsBag, BsHeart, BsXLg, BsList } from 'react-icons/bs';
import '../index.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import logo from '../assets/nikeimg.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLogged = useSelector((state) => state.auth.isAuthenticated);
  const avatarUrl = useSelector((state) => state.auth.user?.photoURL);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [showCart, setShowCart] = useState(false);

  const getUser = () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (!user) return;
    dispatch(authActions.setUser(user));
    dispatch(authActions.setIsAuthenticated(true));
    navigate('/mens');
  };

  useEffect(() => {
    getUser();
    console.log('useEffect');
  }, []);

  const categories = [
    { name: 'Mens', href: '/shop/mens' },
    { name: 'Womens', href: '/shop/womens' },
    { name: 'Kids', href: '/shop/kids' },
    { name: 'Sneakers', href: '/shop/sneakers' },
  ];

  return (
    <nav className="bg-[#eee] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-16 z-10">
          <div className="flex-shrink-0 flex items-center justify-start flex-1">
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-center  space-x-10 flex-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-gray-700  desktop-main-menu  py-2 rounded-md text-sm font-medium">
                {category.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-5 py-2 justify-end items-center flex-1 ">
            <div
              onClick={() => setShowCart(!showCart)}
              className="relative cursor-pointer text-base block font-medium  text-gray-700 hover:text-gray-900 ">
              <BsBag className="h-6 w-6 z-10 blur-0 fliter drop-shadow-lg" />
              <span className="absolute top-[60%] right-[50%] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none  transform translate-x-1/2 -translate-y-1/2  rounded-full">
                10
              </span>
              {showCart && <Cart />}
            </div>

            {isLogged ? (
              <div>
                <img
                  src={
                    avatarUrl ||
                    `https://avatars.dicebear.com/api/male/random.svg`
                  }
                  alt="avatar"
                  className="h-7 w-7  shadow-lg cursor-pointer rounded-full"
                />
              </div>
            ) : (
              <Link to="/auth">
                <button className="bg-[#eee] text-gray-700 ml-5 hover:bg-gray-100 hover:text-gray-900 border-2 border-blue-600  py-2 px-4 rounded-md text-sm font-medium">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
        {/* Mobile */}
        <div className="flex justify-between md:hidden">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none ">
              {isMobileMenuOpen ? (
                <BsXLg className="h-6 w-6" />
              ) : (
                <BsList className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-6 pt-2 pb-3  flex flex-col  space-y-1 ">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="text-gray-700 w-fit desktop-main-menu  py-2 rounded-md text-sm font-medium">
              {category.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 px-6 border-t flex flex-col space-y-4  border-gray-200">
          <Link
            to="/cart"
            className=" text-base  font-medium space-x-3 text-gray-700 hover:text-gray-900 flex items-center ">
            <BsBag className="h-6 w-6 z-10 " />
            <span className="desktop-main-menu">Cart</span>
          </Link>

          {isLogged ? (
            <div>
              <img
                src={
                  avatarUrl ||
                  `https://avatars.dicebear.com/api/male/random.svg`
                }
                alt="avatar"
                className="h-6 w-6 rounded-full"
              />
            </div>
          ) : (
            <Link to="/auth">
              <button className="bg-[#eee] text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-2 border-blue-600  py-2 px-4 rounded-md text-sm font-medium">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
