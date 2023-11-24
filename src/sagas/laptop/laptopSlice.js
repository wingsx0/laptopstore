import { createSlice } from "@reduxjs/toolkit";
const laptopSlice = createSlice({
  name: "laptop",
  initialState: {
    listProduct: [],
    listTypeProduct: [],
    query: "",
  },
  reducers: {
    setListProduct: (state, action) => ({
      ...state,
      listProduct: action.payload,
    }),
    setListTypeProduct: (state, action) => ({
      ...state,
      listTypeProduct: action.payload,
    }),
    setQuery: (state, action) => ({ ...state, query: action.payload }),
    getListProduct() {},
    getListTypeProduct() {},
  },
});
export const {
  getListProduct,
  setListProduct,
  setKeywords,
  getListTypeProduct,
  setListTypeProduct,
} = laptopSlice.actions;
export default laptopSlice.reducer;
