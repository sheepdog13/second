import { createSlice } from "@reduxjs/toolkit";
import { item } from "../types/item";

interface DataState {
  counter: number;
  price: number;
}

const initialState: DataState = {
  counter: 0,
  price: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.counter = state.counter + 1;
      state.price = state.price + action.payload;
    },
    decrase: (state, action) => {
      state.counter = state.counter - 1;
      state.price = state.price - action.payload;
    },
  },
});

export const { increase, decrase } = orderSlice.actions;
export default orderSlice.reducer;
