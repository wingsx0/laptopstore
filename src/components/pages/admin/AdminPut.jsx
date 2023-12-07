import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import HeaderPage from "../../header/HeaderPage";
const AdminPut = () => {
  const [product, setProduct] = React.useState();
  const { id } = useParams();
  const schema = yup
    .object({
      ten_sp: yup.string().required("Vui lòng nhập tên sản phẩm"),
      hinh: yup.string().required("Vui lòng nhập đường dẫn hình"),
      gia: yup.number().required("Vui lòng nhập giá sản phẩm"),
      gia_km: yup.number().required("Vui lòng nhập giá khuyến mãi sản phẩm"),
    })
    .required();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  React.useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/admin/sp/${id}`);
        const data = res.data;
        console.log("handleGetProduct ~ data:", data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetProduct();
  }, [id]);
  const onSubmit = async (values) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/admin/sp/${id}`,
        values
      );
      if (res.status === 200) {
        navigate("/admin/list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderPage title="Sửa sản phẩm"></HeaderPage>
      <form
        className="p-10 mt-5 bg-white rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between mb-5 gap-x-4">
          <div className="flex flex-col gap-y-3 w-[500px]">
            <label htmlFor="" className="text-lg">
              Tên sản phẩm
            </label>
            <input
              className="h-4 px-3 py-5 border border-gray-400 rounded"
              {...register("ten_sp")}
              defaultValue={product?.ten_sp}
            />
            <p className="text-red-500">{errors?.ten_sp?.message}</p>
          </div>
          <div className="flex flex-col gap-y-3 w-[500px]">
            <label htmlFor="" className="text-lg">
              Link hình ảnh
            </label>
            <input
              className="h-4 px-3 py-5 border border-gray-400 rounded"
              {...register("hinh")}
              defaultValue={product?.hinh}
            />
            <p className="text-red-500">{errors.hinh?.message}</p>
          </div>
        </div>
        <div className="flex justify-between mb-5 gap-x-4">
          <div className="flex flex-col gap-y-3 w-[500px]">
            <label htmlFor="" className="text-lg">
              Giá sản phẩm
            </label>
            <input
              className="h-4 px-3 py-5 border border-gray-400 rounded"
              {...register("gia")}
              defaultValue={product?.gia}
            />
            <p className="text-red-500">{errors.gia?.message}</p>
          </div>
          <div className="flex flex-col gap-y-3 w-[500px]">
            <label htmlFor="" className="text-lg">
              Giá khuyến mãi sản phẩm
            </label>
            <input
              className="h-4 px-3 py-5 border border-gray-400 rounded"
              {...register("gia_km")}
              defaultValue={product?.gia_km}
            />
            <p className="text-red-500">{errors.gia_km?.message}</p>
          </div>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPut;
