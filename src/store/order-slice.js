import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders(state, action) {
      action.payload.forEach((order) => {
        state.orders.push(order);
      });
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
