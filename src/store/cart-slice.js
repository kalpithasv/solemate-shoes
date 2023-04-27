import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  isCartOpen: false,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.totalPrice = action.payload.totalPrice || 0;
    },

    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          imageURL: newItem.imageURL,
          size: newItem.size,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice =
        Number(state.totalPrice) + Number(newItem.price) * newItem.quantity;
      localStorage.setItem(
        'cartItems',
        JSON.stringify({
          items: state.items,
          totalPrice: state.totalPrice,
          totalQuantity: state.totalQuantity,
        })
      );
    },
    removeItemFromCart(state, action) {
      const itemToBeRemoved = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemToBeRemoved
      );

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemToBeRemoved);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      if (state.totalQuantity === 0) {
        state.isCartOpen = false;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeItemFromCartBySize(state, action) {
      const itemToBeRemoved = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === itemToBeRemoved.id && item.size === itemToBeRemoved.size
      );

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.totalPrice;
      state.items = state.items.filter(
        (item) =>
          item.id !== itemToBeRemoved.id && item.size !== itemToBeRemoved.size
      );
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
