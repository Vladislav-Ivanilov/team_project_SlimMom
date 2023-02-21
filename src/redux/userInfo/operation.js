import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchCurrentUser = createAsyncThunk('user/info', async () => {
    try {
        const { data } = await axios.get('/user');
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});
