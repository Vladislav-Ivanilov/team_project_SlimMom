import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addEatenProduct = createAsyncThunk(
  '/addEatenProduct',
  async (productData, thunkApi) => {
    try {
      const response = await axios.post('/day', productData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  '/deleteEatenProduct',
  async (productData, thunkApi) => {
    try {
      const response = await axios.delete('/day', productData);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDayInfo = createAsyncThunk(
  '/getDayInfo',
  async (date, thunkApi) => {
    try {
      const response = await axios.post('/day/info', date);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
