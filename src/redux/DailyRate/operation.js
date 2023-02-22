import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchDaily = createAsyncThunk(
  'daily',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/daily-rate', userData);
      console.log('data:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
