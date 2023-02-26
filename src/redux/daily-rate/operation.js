import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchDaily = createAsyncThunk('daily', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/daily-rate', userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.massage);
  }
});

export const fetchDailyRateByUserId = createAsyncThunk(
  'daily/ByUserId',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/daily-rate/${userId}`, userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
