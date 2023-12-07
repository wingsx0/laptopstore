import { combineReducers } from "@reduxjs/toolkit";
import laptopSlice from "./laptop/laptopSlice";
import authSlice from "./authSaga/authSlice";
export const reducer = combineReducers({
  laptop: laptopSlice,
  auth: authSlice,
});
