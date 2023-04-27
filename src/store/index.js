import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import productsSlice from './products-slice';
import shopSlice from './shop-slice';
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    shop: shopSlice.reducer,
  },
});

export default store;
