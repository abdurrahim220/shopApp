import { createSlice } from '@reduxjs/toolkit';

import { getHomeProducts, getViewAllProducts } from './productThunk';
import { ProductState } from './productType';

const initialState: ProductState = {
  products: [],
  homeProducts: [],
  meta: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      // getHomeProducts
      .addCase(getHomeProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomeProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.homeProducts = action.payload;
      })
      .addCase(getHomeProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

  
      .addCase(getViewAllProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getViewAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.items;
        state.meta = action.payload.meta;
      })
      .addCase(getViewAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
