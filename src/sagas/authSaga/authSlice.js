import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isActive: true,
    isLogin: false,
    isAdmin: false,
    userInfo: {},
  },
  reducers: {
    setIsLogin: (state, { payload }) => ({ ...state, isActive: payload }),
    setLogin: (state, { payload }) => ({ ...state, isLogin: payload }),
    setIsAdmin: (state, { payload }) => ({ ...state, isAdmin: payload }),
    setUserInfo: (state, { payload }) => ({ ...state, userInfo: payload }),
  },
});

export const { setIsLogin, setLogin, setUserInfo, setIsAdmin } =
  authSlice.actions;
export default authSlice.reducer;
