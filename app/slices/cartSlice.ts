import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  items: [], //prefilled
  cart: [], //empty
  status: 'idle',
  error: null,
};
//'https://fakestoreapi.com/products
export const fetchItems = createAsyncThunk('cart/fetchItems', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const productToAdd = state.items.find((item) => item.id === productId);
      console.log(productToAdd);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { addToCart } = cartSlice.actions;
