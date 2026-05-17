import {createAsyncThunk} from '@reduxjs/toolkit';
import { apiRequest } from '../../services/api';


export const getProducts = createAsyncThunk(
  'products/getProducts',

  async (_, thunkAPI) => {
    try {
      const response = await apiRequest({
        endpoint: '/products',
        method: 'GET',
      });

      return response.data.items;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message,
      );
    }
  },
);