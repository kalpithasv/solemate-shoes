import React from 'react';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="auth" element={<Auth />} />
      <Route path="cart" element={<Cart />} />
      <Route path="myorders" element={<MyOrders />} />
      <Route path="shop/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
