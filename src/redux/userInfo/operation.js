import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchCurrentUser = createAsyncThunk(
  'user/info',
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
