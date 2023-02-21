import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchDiely = createAsyncThunk(
  'daily',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/daily-rate', {
        weight: 100,
        height: 170,
        age: 30,
        desiredWeight: 110,
        bloodType: 4,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', { name, number });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.massage);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.massage);
//     }
//   }
// );
