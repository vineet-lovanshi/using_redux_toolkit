import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("product", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const jsonResp = await resp.json();
  return jsonResp.products;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};
const productSlice = createSlice({
  name: "productSLice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.payload);
    });
  },
});

export default productSlice.reducer;
