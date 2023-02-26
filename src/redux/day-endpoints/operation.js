import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addEatenProduct = createAsyncThunk('/addEatenProduct', async (productData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/day', productData);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteEatenProduct = createAsyncThunk('/deleteEatenProduct', async (productData, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete('/day', { data: { ...productData } });
    return { productId: productData.eatenProductId, data };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getDayInfo = createAsyncThunk('/getDayInfo', async (value, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/day/info', value);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
