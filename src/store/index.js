import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import prodSlice from './prod-slice';
import shopSlice from './shop-slice';
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    prod: prodSlice.reducer,
    shop: shopSlice.reducer,
  },
});

export default store;
