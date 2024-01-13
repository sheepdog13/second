import { combineReducers } from "@reduxjs/toolkit";
import item from "./item";

const reducer = combineReducers({
  item,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
