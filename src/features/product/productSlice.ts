import { createSlice } from '@reduxjs/toolkit';

import { getHomeProducts, getViewAllProducts } from './productThunk';
import { ProductState, Product } from './productType';

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

  
      .addCase(getViewAllProducts.pending, (state, action) => {
        const isInitialPage = !action.meta.arg || action.meta.arg.page === 1;
        if (isInitialPage) {
          state.loading = true;
        }
        state.error = null;
      })
      .addCase(getViewAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { items, meta } = action.payload;
        if (!meta || meta.page === 1) {
          state.products = items;
        } else {
          const existingIds = new Set(state.products.map((p: Product) => p._id));
          const newItems = (items as Product[]).filter((p: Product) => !existingIds.has(p._id));
          state.products = [...state.products, ...newItems];
        }
        state.meta = meta;
      })
      .addCase(getViewAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
