import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { listsp } from "../../data";
const PopularList = ({ id }) => {
  const [products, setProducts] = React.useState([]);
  // const arrPrList = listsp.filter((item) => item.id_loai === id);
  React.useEffect(() => {
    // if (listsp.length > 0) {
    //   return setProducts(listsp.filter((item) => item.soluotxem > 950));
    // }
    return;
  }, []);
  return (
    <div className="w-full p-4 bg-[#9966cc] mx-auto rounded">
      <header className="flex items-center justify-between">
        <h2 className="text-[#ffee12] text-2xl font-extrabold uppercase mb-5">
          sản phẩm xem nhiều
        </h2>
        <span className="text-lg text-white">Xem thêm khuyến mãi</span>
      </header>
      <div className="card-list">
        <Swiper grabCursor={"true"} spaceBetween={4} slidesPerView={"auto"}>
          {products.length > 0 &&
            products.map((item) => (
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
    <div className="flex flex-col items-center p-3 text-black bg-white rounded">
      <div className="w-full h-[191px]">
        <img src={hinh} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="py-2 content">
        <h3 className="h-8 overflow-hidden text-sm font-semibold mb-[6px]">
          {ten_sp}
        </h3>
        <span className="line-through text-[#6d6e72] text-xs font-semibold">
          {gia}₫
        </span>
        <div className="flex items-center gap-x-3">
          <span className="text-lg font-semibold text-[#e30019]">
            {gia_km}₫
          </span>
          <span className="h-5 px-1 text-xs text-red-500 bg-red-100 border border-red-500 rounded-sm">
            {Math.floor(((gia - gia_km) / gia) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default PopularList;
