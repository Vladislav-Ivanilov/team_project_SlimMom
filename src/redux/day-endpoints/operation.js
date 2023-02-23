import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addEatenProduct = createAsyncThunk(
  '/addEatenProduct',
  async (productData, thunkApi) => {
    try {
      const { data } = await axios.post('/day', productData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  '/deleteEatenProduct',
  async (productData, thunkApi) => {
    try {
      const { data } = await axios.delete('/day', { data: { ...productData } });
      // console.log(`deleteEaten:`, productData.eatenProductId, data);
      return { productId: productData.eatenProductId, data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDayInfo = createAsyncThunk(
  '/getDayInfo',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day/info', date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
