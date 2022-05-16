import { createSlice } from '@reduxjs/toolkit';
import shoppingItems from '../../data/ItemList';

const ProductSlice = createSlice({
  name: 'products',
  initialState: shoppingItems.slice(0, 9),
  reducers: {
    loadMore: (state) => shoppingItems.slice(0, state.length + 3),
  },
});

export const { loadMore } = ProductSlice.actions;
export default ProductSlice.reducer;
