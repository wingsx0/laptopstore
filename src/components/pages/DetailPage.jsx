import React, { useEffect, useState } from "react";
import axios from "axios";
import formatCurrency from "../../config";
import { useParams } from "react-router-dom";
import ProductList from "../listProduct/ProductList";
const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [arrRelated, setArrRelated] = useState([]);
  useEffect(() => {
    const fetchDetailProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/laptop/sp/${id}`);
        const data = res.data;
        setProduct(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    const fetchRelatedProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/laptop/sptrongloai/${id}`
        );
        const data = res.data;
        if (!data) return null;
        setArrRelated(data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchDetailProduct();
    fetchRelatedProduct();
  }, [id]);
  return (
    <div className="my-5">
      <>
        <div className="flex bg-white rounded">
          <div className="w-[420px] p-6 border-r border-gray-200">
            <img src={product.hinh} alt="" />
          </div>
          <div className="flex flex-col justify-center p-6 ">
            <h3 className="mb-3 text-2xl font-semibold">{product.ten_sp}</h3>
            <div className="flex items-center mb-4">
              <span className="flex items-center mr-4 text-yellow-500 gap-x-1">
                <span>4.8</span>
                <i class="fa-solid fa-star text-xs"></i>
              </span>
              <span className="text-lg text-blue-800 cursor-pointer">
                Xem đánh giá
              </span>
            </div>
            <div className="mb-8">
              <span className="mr-3 text-4xl font-semibold text-red-600">
                {formatCurrency(product.gia_km)}
              </span>
              <span className="mr-3 text-lg font-semibold text-gray-500 line-through">
                {formatCurrency(product.gia)}
              </span>
              <span className="px-[8px] py-[3px] text-xs text-red-500 bg-red-100 border border-red-600 rounded">
                -14%
              </span>
            </div>
            <div className="mb-4">
              <div className="py-[10px] px-[20px] text-lg font-semibold flex items-center gap-x-[7px] text-red-600 bg-red-300 rounded-tr-md rounded-tl-md">
                <i class="fa-solid fa-gift"></i>
                <span>Quà tặng khuyến mãi</span>
              </div>
              <div className="py-[10px] px-[20px] text-lg font-semibold flex items-center gap-x-[7px] border border-red-300 rounded-br-md rounded-bl-md">
                <i class="fa-solid fa-dice-one text-red-600"></i>
                <span className="text-sm ">Móc khóa Keycap GearVN</span>
              </div>
            </div>
            <button className="flex flex-col items-center justify-center p-[10px] bg-red-600 text-white mb-[10px] w-[400px] rounded-md font-semibold">
              <span className="text-lg">MUA NGAY</span>
              <span className="text-sm font-normal">
                Giao tận nơi hoặc nhận tại cửa hàng
              </span>
            </button>
            <div className="flex flex-col gap-y-[22px] text-lg font-medium text-gray-700">
              <span>✔ Bảo hành chính hãng 24 tháng.</span>
              <span>✔ Hỗ trợ đổi mới trong 7 ngày.</span>
              <span>✔ Windows bản quyền tích hợp. </span>
              <span>✔ Miễn phí giao hàng toàn quốc.</span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between mt-4 gap-x-4">
          <div className="px-6  bg-white w-[693px] rounded">
            <div>
              <h3 className="py-4 text-2xl font-semibold">Mô tả sản phẩm</h3>
              <div className="py-4 font-semibold">
                <h4 className="text-lg">Thông số kỹ thuật:</h4>
                <table className="mt-3">
                  <tr className="text-lg font-semibold">
                    <td className="p-2 bg-gray-100 w-[123px]  text-blue-500 font-bold">
                      CPU
                    </td>
                    <td className="p-2">{product.CPU}</td>
                  </tr>
                  <tr className="text-lg font-semibold">
                    <td className="p-2 bg-gray-100 w-[123px]  text-blue-500 font-bold">
                      RAM
                    </td>
                    <td className="p-2">{product.RAM}</td>
                  </tr>
                  <tr className="text-lg font-semibold">
                    <td className="p-2 bg-gray-100 w-[123px]  text-blue-500 font-bold">
                      Ổ cứng
                    </td>
                    <td className="p-2">
                      {product.Dia} PCIe® 4.0 NVMe™ M.2 SSD (2230) (Còn trống 1
                      khe SSD M.2 PCIE)
                    </td>
                  </tr>
                  <tr className="text-lg font-semibold">
                    <td className="p-2 bg-gray-100 w-[123px]  text-blue-500 font-bold">
                      Màu sắc
                    </td>
                    <td className="p-2">{product.Mausac}</td>
                  </tr>
                  <tr className="text-lg font-semibold">
                    <td className="p-2 bg-gray-100 w-[123px]  text-blue-500 font-bold">
                      Cân nặng
                    </td>
                    <td className="p-2">{product.Cannang}kg</td>
                  </tr>
                </table>
              </div>
            </div>
            <div></div>
          </div>
          <div className="px-6 py-4 bg-white rounded w-[491px]">
            <h2 className="mb-4 text-2xl font-semibold">Tin tức về sản phẩm</h2>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <img
                  src="https://file.hstatic.net/200000722513/article/ske7zogagczthdgtxhgtdg_a14aec383de04579b3cf03d48523004a_grande.jpg"
                  alt=""
                  className="w-[89px] h-[50px] rounded object-cover"
                />
                <p className="text-base">
                  Kingston giữ vững ngôi vị nhà cung cấp môđun DRAM hàng đầu thế
                  giới suốt 20 năm liên tiếp
                </p>
              </div>
              <div className="flex gap-x-4">
                <img
                  src="https://file.hstatic.net/200000722513/article/intel-core-ultra-9-185h-meteor-lake-cpu_115d5dcc1c824af0b9624b0141e80a27_grande.jpg"
                  alt=""
                  className="w-[89px] h-[50px] rounded object-cover"
                />
                <p className="text-base">
                  Lộ hiệu năng của Intel Core Ultra 9 185H “Meteor Lake” 5,1GHz
                  ấn tượng
                </p>
              </div>
              <div className="flex gap-x-4">
                <img
                  src="https://file.hstatic.net/200000722513/article/05lyvnmydr6eybcrtirzw8m-1.fit_lim.size_1600x900.v1683124910_2c96d2f290d1446ca40a8df20c2d2e30_grande.jpg"
                  alt=""
                  className="w-[89px] h-[50px] rounded object-cover"
                />
                <p className="text-base">
                  AMD trình làng CPU laptop 7040U series trang bị nhân Zen 4c tí
                  hon
                </p>
              </div>
              <div className="flex gap-x-4">
                <img
                  src="https://file.hstatic.net/200000722513/article/sffdj4u5nhgb7rm3cvtfho_a028a7b258b943febca0083f9c436a63_grande.jpg"
                  alt=""
                  className="w-[89px] h-[50px] rounded object-cover"
                />
                <p className="text-base">
                  MSI trình làng bo mạch chủ Project Zero với cổng nguồn “tàng
                  hình”
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductList title="Sản phẩm liên quan" arr={arrRelated}></ProductList>
      </>
    </div>
  );
};

export default DetailPage;
