import { createSlice } from '@reduxjs/toolkit';
import { productSearch } from './operation';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [productSearch.fulfilled](state, action) {
      state.products = [...action.payload];
    },
  },
});

export const productReducer = productSlice.reducer;
