import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/info',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const sessionRefreshing = createAsyncThunk(
//   'auth/refresh',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const persistedsessionId = { sessionId: state.auth.sessionId };

//     if (persistedsessionId === null) {
//       return rejectWithValue('Ops...');
//     }
//     try {
//       token.set(state.auth.refreshToken);
//       const { data } = await axios.post('/auth/refresh', persistedsessionId);
//       token.set(data.newAccessToken);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.massage);
//     }
//   }
// );
