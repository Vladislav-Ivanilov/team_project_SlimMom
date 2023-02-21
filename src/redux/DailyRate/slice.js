import { createSlice } from '@reduxjs/toolkit';
import { fetchDiely } from './operation';

const initialState = {
  dailyRate: 0,
  notAllowedProducts: [],
};

const dailySlice = createSlice({
  name: 'userDaily',
  initialState,
  extraReducers: {
    [fetchDiely.fulfilled]: (state, action) => {
      state.dailyRate = action.payload.dailyRate;
      state.notAllowedProducts = action.payload.notAllowedProducts;
    },
  },
});

export default dailySlice.reducer;
