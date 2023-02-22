import { createSlice } from '@reduxjs/toolkit';
import { search } from './operation';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [search.fulfilled](state, action) {
      state.products = [...action.payload];
    },
  },
});

export const productReducer = productSlice.reducer;
