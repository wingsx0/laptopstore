import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: true,
  },
  reducers: {
    setIsLogin: (state, { payload }) => ({ ...state, isLogin: payload }),
  },
});

export const { setIsLogin } = authSlice.actions;
export default authSlice.reducer;
