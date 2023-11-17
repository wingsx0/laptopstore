import React from "react";
import Menu from "../Menu";
import PopularList from "../listProduct/PopularList";
import ProductList from "../listProduct/ProductList";

const HomePage = () => {
  return (
    <div className="mt-4">
      <WrapperSection></WrapperSection>
      <PopularList></PopularList>
      <div className="flex items-center justify-between gap-x-4 mt-4">
        <div>
          <img
            src="https://file.hstatic.net/200000722513/file/promotion_left_-_pc_station_0923c7e4de174e2abb4ef1cd7970032e.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div>
          <img
            src="https://file.hstatic.net/200000722513/file/promotion_right_-_ban_ghe_766cabd265b94007812be23449cc0a2c.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <ProductList></ProductList>
    </div>
  );
};
function WrapperSection() {
  return (
    <div className="flex justify-between items-start mb-6">
      <Menu></Menu>
      <div className="flex items-center justify-between h-[496px]">
        <div>
          <div className="w-[651px] h-[326px] p-2">
            <img
              src="https://file.hstatic.net/200000722513/file/6_20f8dbf6da254794805e8449bcff3adb.png"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex items-center justify-between w-[651px]">
            <div className="w-[317px] h-[159px]">
              <img
                src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[317px] h-[159px]">
              <img
                src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[317px] h-[159px]">
            <img
              src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[317px] h-[159px]">
            <img
              src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[317px] h-[159px]">
            <img
              src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
