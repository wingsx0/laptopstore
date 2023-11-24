import React from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../../config";

const Card = ({ item }) => {
  const { ten_sp, id_sp, gia, gia_km, hinh, hot } = item;
  return (
    <div className="border border-gray-200 w-[230px] rounded shadow-md">
      <div className="w-[230px] h-[264px] flex items-center cursor-pointer relative p-2">
        <Link to={`/product/${id_sp}`}>
          <img src={hinh} alt="" />
        </Link>
        {hot === 1 && (
          <span className="text-xs bg-red-700 h-[22px] text-white py-[2px] px-4 rounded-full absolute bottom-0 left-4">
            <i className="fa-solid fa-fire"></i>
            <span className="ml-1 font-medium">Hot fire</span>
          </span>
        )}
      </div>
      <div className="px-4">
        <div className="w-[198px]">
          <h4 className="h-[40px] w-full text-sm font-semibold mb-2 hover:text-red-500">
            <Link to={`/product/${id_sp}`}>{ten_sp}</Link>
          </h4>
          <div className="mb-2 ">
            <span className="pb-2 text-xs font-semibold text-gray-500 line-through">
              {formatCurrency(gia)}
            </span>
            <div>
              <span className="text-xl font-semibold text-red-500">
                {formatCurrency(gia_km)}
              </span>
              <span className="px-1 ml-3 text-xs text-center text-red-500 bg-red-100 border border-red-500">
                -{Math.floor(((gia - gia_km) / gia) * 100)}%
              </span>
            </div>
          </div>
          <div className="mb-4 text-xs">
            <span className="text-[#ff8a00] font-semibold mr-2">
              0.0 <i className="fa-solid fa-star"></i>
            </span>
            <span>0 đánh giá</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
