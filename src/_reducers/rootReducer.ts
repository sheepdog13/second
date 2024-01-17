import { combineReducers } from "@reduxjs/toolkit";
import item from "./item";
import order from "./order";
const reducer = combineReducers({
  item,
  order,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
