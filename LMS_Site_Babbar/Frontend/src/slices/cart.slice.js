import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const intialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {
    setTotolItems(state, value) {
      state.token = value.payload;
    },
    addToCart(state, value) {
      state.items.push(value.payload);
      toast.success("Item added to cart");
    },
    removeFromCart(state, value) {
      state.items = state.items.filter((item) => item.id != value.id);
      toast.success("Item removed from cart");
    },
  },
});

export const { addToCart, removeFromCart, setTotolItems } = cartSlice.actions;

export default cartSlice.reducer;
