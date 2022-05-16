import { createSlice } from '@reduxjs/toolkit';
import { ShoppingItems } from '../../data/ItemList';

const newState: ShoppingItems[] = [];

const shoppingCartSlice = createSlice({
  name: 'shopItems',
  initialState: newState,
  reducers: {
    addToCart: (state, action):any => {
      if (state.some((product) => product.id === action.payload.id)) {
        return (
          state.map((item) => {
            if (item.title === action.payload.title) {
              return { ...item, count: item.count + 1 };
            }
            return item;
          })
        );
      }
      return [...state, action.payload];
    },
    increaseItemQuantity: (state, action) => (
      state.map((item) => {
        if (item.title === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    ),
    DecreaseItemQuantity: (state, action) => (
      state.map((item) => {
        if (item.title === action.payload) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    ),
    removeItem: (state, action) => (
      state.filter((item) => item.title !== action.payload)
    ),
  },
});

export const {
  addToCart, increaseItemQuantity, DecreaseItemQuantity, removeItem,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
