/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';
import shoes from './shoesData';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Prod from './components/ProductCard';
import { productsActions } from './store/products-slice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const getUser = () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (!user) return;
    dispatch(authActions.setUser(user));
    dispatch(authActions.setIsAuthenticated(true));
  };

  useEffect(() => {}, [user]);

  useEffect(() => {
    dispatch(productsActions.setShoeData(shoes));
    getUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Auth />} />
      <Route path="cart" element={<Cart />} />
      <Route path="myorders" element={<MyOrders />} />
      <Route path="shop/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
      <Route path="prod" element={<Prod />} />
    </Routes>
  );
};

export default App;
