import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import HeaderPage from "../../header/HeaderPage";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct } from "../../../sagas/laptop/laptopSlice";
import ButtonDel from "../../button/ButtonDel";
import { Link } from "react-router-dom";
const AdminListPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);
  const { listProduct } = useSelector((state) => state.laptop);
  const newArr = listProduct.map((product) => ({
    ...product,
    id: product.id_sp,
  }));

  return (
    <div>
      <HeaderPage title="Danh sách sản phẩm"></HeaderPage>
      <div className="mt-10">
        <TableList arr={newArr}></TableList>
      </div>
    </div>
  );
};
function TableList({ arr }) {
  const lastArr = arr.slice(-100);

  const columns = [
    { field: "ten_sp", headerName: "Tên sản phẩm", width: 300 },
    { field: "gia", headerName: "Giá sản phẩm", width: 200 },
    { field: "gia_km", headerName: "Giá khuyến mãi", width: 200 },
    {
      field: "hinh",
      headerName: "Hình sản phẩm",
      width: 130,
      renderCell: (params) => (
        <div className="p-5 rounded">
          <img
            src={params.row.hinh}
            alt=""
            className="object-cover w-full h-full rounded"
          />
        </div>
      ),
    },
    {
      field: "ngay",
      headerName: "Ngày đăng",
      width: 130,
      renderCell: (params) => (
        <div>{new Date(params.row.ngay).toLocaleDateString()}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Chức năng",
      width: 150,
      renderCell: (params) => (
        <div className="flex items-center gap-x-3">
          <Link to={`/admin/put/${params.row.id_sp}`}>
            <button className="put">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </Link>
          <ButtonDel id={params.row.id_sp} />
        </div>
      ),
    },
  ];
  const rows = [...lastArr];
  return (
    <div className="h-[630px] w-full bg-white rounded">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pagination
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
}
export default AdminListPage;
