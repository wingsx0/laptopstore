import { createSlice } from "@reduxjs/toolkit";
const laptopSlice = createSlice({
  name: "laptop",
  initialState: {
    listProduct: [],
    listTypeProduct: [],
    query: "",
    selectKeyword: "",
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
    setSelectKeyword: (state, action) => ({
      ...state,
      selectKeyword: action.payload,
    }),
    getListProduct() {},
    getListTypeProduct() {},
  },
});
export const {
  setListProduct,
  setListTypeProduct,
  setQuery,
  getListProduct,
  getListTypeProduct,
  setSelectKeyword,
} = laptopSlice.actions;
export default laptopSlice.reducer;
