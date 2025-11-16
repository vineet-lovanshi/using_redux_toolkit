import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // value: 0,
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value += 1;
      // console.log(action);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // state.value > 0 ? (state.value -= 1) : null;
      // state.items.pop(action.payload);
      const cartData = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
    clearItem: (state) => {
      state.value = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = addToCart.actions;
export default addToCart.reducer;
