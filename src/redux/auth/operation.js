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

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/auth/register', credentials);

        token.set(data.accessToken);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/auth/login', credentials);
        token.set(data.accessToken);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await axios.post('/auth/logout');
        token.unset();
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const sessionRefreshing = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedSid = { sid: state.auth.sid };

        if (persistedSid === null) {
            return thunkApi.rejectWithValue();
        }
        try {
            token.set(state.auth.refreshToken);
            const { data } = await axios.post('/auth/refresh', persistedSid);
            token.set(data.newAccessToken);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
);
