// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
// };

// export const fetchCurrentUser = createAsyncThunk(
//     'user/info',
//     async (_, thunkApi) => {
//         const state = thunkApi.getState();
//         const persistedToken = state.auth.accessToken;

//         if (persistedToken === null) {
//             return thunkApi.rejectWithValue();
//         }
//         try {
//             token.set(persistedToken);
//             const { data } = await axios.get('/user');
//             return data;
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// );
