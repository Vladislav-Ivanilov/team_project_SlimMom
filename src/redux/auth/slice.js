import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { fetchCurrentUser, login, logout, register } from './operation';

const initialState = {
  user: { username: null, email: null, userData: {} },
  todaySummary: null,
  accessToken: null,
  refreshToken: null,
  sessionId: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sid;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.todaySummary = action.payload.todaySummary;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { username: null, email: null, userData: {} };
      state.todaySummary = null;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [fetchDailyRateByUserId.fulfilled](state, action) {
      state.user.userData = action.meta.arg.userData;
      state.user.userData.notAllowedProducts =
        action.payload.notAllowedProducts;
      state.user.userData.dailyRate = action.payload.dailyRate;
    },
    // [sessionRefreshing.fulfilled](state, action) {
    //     state.accessToken = action.payload.newAccessToken;
    //     state.refreshToken = action.payload.newRefreshToken;
    //     state.sessionId = action.payload.sessionId;
    //     state.isLoggedIn = true;
    // },
  },
});

export const authReducer = authSlice.reducer;
