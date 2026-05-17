import { createSlice } from '@reduxjs/toolkit';

import { getProducts } from './productThunk';
import { ProductState } from './productType';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder

      .addCase(getProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
