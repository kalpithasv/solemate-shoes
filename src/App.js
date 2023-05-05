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
import { productsActions } from './store/products-slice';
import { cartActions } from './store/cart-slice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './utils/firebase';
import { orderActions } from './store/order-slice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (!user) return;
    dispatch(authActions.setUser(user));
    dispatch(authActions.setIsAuthenticated(true));
  };

  useEffect(() => {}, [user]);

  const getOrders = async () => {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    dispatch(orderActions.clearOrders());
    dispatch(orderActions.setOrders(docSnap.data().orders));
  };

  useEffect(() => {
    console.log('shoes');
    dispatch(productsActions.setShoeData(shoes));
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getOrders();
    }
  }, [user]);

  useEffect(() => {
    const cartInfo =
      localStorage.getItem('cartItems') !== 'undefined'
        ? JSON.parse(localStorage.getItem('cartItems'))
        : localStorage.clear();
    if (cartInfo) {
      dispatch(cartActions.setCart(cartInfo));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/men" element={<Shop />} />
      <Route path="shop/women" element={<Shop />} />
      <Route path="shop/kids" element={<Shop />} />
      <Route path="shop/casual" element={<Shop />} />
      <Route path="auth" element={<Auth />} />
      <Route path="cart" element={<Cart />} />
      <Route path="myorders" element={<MyOrders />} />
      <Route path="shop/:id" element={<Product />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
