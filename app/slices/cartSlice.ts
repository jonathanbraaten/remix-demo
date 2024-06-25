import { createSlice } from '@reduxjs/toolkit';

interface StorageItems {
  id: number;
  title: string;
}

interface CartState {
  items: StorageItems[];
  quantity: number;
}

export interface RootState {
  cart: CartState;
}
let isStorageItems: StorageItems[] = [];
let isQuantity: number = 0;
if (typeof window !== 'undefined') {
  isStorageItems = JSON.parse(localStorage.getItem('cart') || '[]');
  isQuantity = Number(localStorage.getItem('quantity')) || 0;
}
const initialState: CartState = {
  items: isStorageItems,
  quantity: isQuantity,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item: StorageItems = {
        id: action.payload.id,
        title: action.payload.title,
      };
      state.items = [...state.items, item];
      state.quantity = state.items.length;
    },
  },
});

export const { addToCart } = cartSlice.actions;
