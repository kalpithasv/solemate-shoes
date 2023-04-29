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

    setFilteredCategory(state, action) {
      state.filteredCategory = action.payload;
    },

    setFilteredShoes(state, action) {
      state.filteredShoes = action.payload;
    },

    setFilteredPrice(state, action) {
      state.filteredPrice = action.payload;
    },

    setFilteredGender(state, action) {
      state.filteredGender = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
