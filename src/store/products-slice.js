import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'prod',
  initialState: {
    shoeData: [],
  },
  reducers: {
    setShoeData(state, action) {
      state.shoeData = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
