import { createSlice } from '@reduxjs/toolkit';
import { addEatenProduct, deleteEatenProduct, getDayInfo } from './operation';

const initialState = {
  date: null,
  dateId: null,
  eatenProducts: [],
  deleteProductId: null,
  error: null,
};

const handlePending = () => {};
const handleRejected = () => {
  console.log(`error`);
};

const dayEndpointsSlice = createSlice({
  name: 'dayEndpoints',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setDeleteProductId: (state, action) => {
      state.deleteProductId = action.payload;
    },
  },
  extraReducers: {
    [addEatenProduct.fulfilled](state, action) {
      console.log(`add:`, action.payload);
      state.eatenProducts.push(action.payload.eatenProduct);
    },
    [getDayInfo.fulfilled](state, action) {
      console.log(action.payload);
      if (!action.payload.eatenProducts) {
        state.eatenProducts = [];
        return;
      }
      state.dateId = action.payload.id;
      state.eatenProducts = [...action.payload.eatenProducts];
    },
    [addEatenProduct.pending]: handlePending,
    [deleteEatenProduct.rejected]: handleRejected,
    [deleteEatenProduct.fulfilled]: (state, action) => {
      console.log(`delete:`, action.payload);
      const { productId } = action.payload;

      state.eatenProducts = state.eatenProducts.filter(
        product => product.id !== productId
      );
    },
  },
});

export const { setDate, setDeleteProductId } = dayEndpointsSlice.actions;

export const dayEndpointsReducer = dayEndpointsSlice.reducer;
