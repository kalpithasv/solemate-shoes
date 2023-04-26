import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[{
        name:"Kalps",price:3000,image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",id:1234,quantity:5
    }]
  },
  reducers: {
    
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;