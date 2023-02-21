import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './operation';

const initialState = {
    username: null,
    email: null,
    userData: null,
    days: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [fetchCurrentUser.fulfilled](state, action) {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.userData = action.payload.userData;
            state.days = action.payload.days;
        },
    },
});

export const userReducer = userSlice.reducer;
