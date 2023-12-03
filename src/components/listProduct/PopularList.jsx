import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import formatCurrency from "../../config";
const PopularList = ({ arr }) => {
  return (
    <div className="w-full p-4 bg-[#d61e2b] mx-auto rounded">
      <header className="flex items-center justify-between">
        <h2 className="text-[#ffee12] text-2xl font-extrabold uppercase mb-5">
          sản phẩm xem nhiều
        </h2>
        <span className="text-lg text-white">Xem thêm khuyến mãi</span>
      </header>
      <div className="card-list">
        <Swiper grabCursor={"true"} spaceBetween={4} slidesPerView={"auto"}>
          {arr.length > 0 &&
            arr.map((item) => (
              <SwiperSlide key={item.id_sp}>
                <Card item={item}></Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

function Card({ item }) {
  const { ten_sp, gia, gia_km, hinh } = item;
  return (
    <div className="flex flex-col items-center p-3 text-black bg-white rounded w-[191px]">
      <div className="w-full h-[191px]">
        <img src={hinh} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="py-2 content">
        <h3 className="h-8 overflow-hidden text-sm font-semibold mb-[6px]">
          {ten_sp}
        </h3>
        <span className="line-through text-[#6d6e72] text-xs font-semibold">
          {formatCurrency(gia)}
        </span>
        <div className="flex items-center gap-x-3">
          <span className="text-lg font-semibold text-[#e30019]">
            {formatCurrency(gia_km)}
          </span>
          <span className="flex items-center justify-center h-5 px-1 text-xs text-red-500 bg-red-100 border border-red-500 rounded-sm">
            <span>-{Math.floor(((gia - gia_km) / gia) * 100)}%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PopularList;
