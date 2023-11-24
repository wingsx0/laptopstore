import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
const ProductList = ({ title, arr }) => {
  const arrProduct = arr?.slice(0, 12);
  return (
    <div className="w-full bg-white rounded p-[10px] mt-4">
      <header className="px-6 py-4">
        <span className="mr-5 text-2xl font-semibold">{title}</span>
        <span className="inline-block pl-6 border-2 border-l-black border-t-transparent border-r-transparent border-b-transparent">
          <i className="fa-solid fa-truck text-[#ff3c53]"></i>
          <span className="ml-3 text-lg font-semibold">Miễn phí giao hàng</span>
        </span>
      </header>
      <div className="cards">
        <Swiper grabCursor={"true"} spaceBetween={8} slidesPerView={"auto"}>
          {arrProduct?.length > 0 &&
            arrProduct.map((item) => (
              <SwiperSlide key={item.id_sp}>
                <Card item={item}></Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
