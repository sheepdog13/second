import { createSlice } from "@reduxjs/toolkit";
import { item } from "../types/item";

const initialState: item = {
  id: "",
  name: "",
  event: 0,
  materialType: 0,
  price: 0,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
});

export default itemSlice.reducer;
