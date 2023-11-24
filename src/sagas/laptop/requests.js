import axios from "axios";
export function requestGetProduct() {
  return axios.request({
    method: "GET",
    url: "http://localhost:4000/laptop/sp",
  });
}
export function requestGetListTypeProduct() {
  return axios.request({
    method: "GET",
    url: `http://localhost:4000/laptop/loai/`,
  });
}
export function requestSearchProduct() {
  return axios.request({
    method: "GET",
    url: "http://localhost:4000/laptop/sanpham/search?query=MSI",
  });
}
