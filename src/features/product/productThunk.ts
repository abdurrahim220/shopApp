import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHomeProductsApi, fetchViewAllProductsApi } from './productApi';

export const getHomeProducts = createAsyncThunk(
  'products/getHomeProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetchHomeProductsApi();
      return response.data.items;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || 'Failed to fetch home products',
      );
    }
  },
);

export const getViewAllProducts = createAsyncThunk(
  'products/getViewAllProducts',
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    try {
      const response = await fetchViewAllProductsApi(page, limit);
      return response.data; // returns { items, meta }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || 'Failed to fetch all products',
      );
    }
  },
);