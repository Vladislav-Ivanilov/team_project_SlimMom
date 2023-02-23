import { createSlice } from '@reduxjs/toolkit';
import { fetchDaily } from './operation';

const initialState = {
  dailyRate: 0,
  notAllowedProducts: [],
};

const dailySlice = createSlice({
  name: 'userDaily',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDaily.fulfilled]: (state, action) => {
      state.dailyRate = action.payload.dailyRate;
      state.notAllowedProducts = action.payload.notAllowedProducts;
    },
  },
});

export default dailySlice.reducer;
