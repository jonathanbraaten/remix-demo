import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
    
    },
  },
});

export const { addToCart } = cartSlice.actions;
