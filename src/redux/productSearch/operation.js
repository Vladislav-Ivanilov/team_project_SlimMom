import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const productSearch = createAsyncThunk('product/search', async (product, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/product?search=${product}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.massage);
  }
});
