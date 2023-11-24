import { combineReducers } from "@reduxjs/toolkit";
import laptopSlice from "./laptop/laptopSlice";
export const reducer = combineReducers({
  laptop: laptopSlice,
});
