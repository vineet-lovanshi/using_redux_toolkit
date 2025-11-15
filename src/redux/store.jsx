import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productSliceReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productSliceReducer,
  },
});
export default store;
