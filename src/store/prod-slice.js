import { createSlice } from '@reduxjs/toolkit';

const prodSlice = createSlice({
  name: 'prod',
  initialState: {
    items:[]
  },
  reducers: {
    
  },
});

export const prodActions = prodSlice.actions;

export default prodSlice;