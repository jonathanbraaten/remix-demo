import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = {
        id: action.payload.id,
        title: action.payload.title,
      };
      state.items.push(item);
      localStorage.setItem('cart', JSON.stringify(state.items));
      const storage = JSON.parse(localStorage.getItem('cart'));
      state.quantity = storage.length;
    },
  },
});

export const { addToCart } = cartSlice.actions;
