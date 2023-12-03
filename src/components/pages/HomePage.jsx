import React, { useState } from "react";
import Menu from "../menu/Menu";
import PopularList from "../listProduct/PopularList";
import ProductList from "../listProduct/ProductList";
import axios from "axios";

const HomePage = () => {
  const [popular, setPopular] = useState([]);
  const [arrGaming, setArrGaming] = useState([]);
  const [arrAsus, setArrAsus] = useState([]);
  const [arrProductHot, setArrProductHot] = useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/laptop/sp");
        const data = response.data;
        setPopular(data.filter((item) => item.soluotxem > 900).slice(0, 15));
        setArrGaming(
          data
            .filter((item) => item.ten_sp.toLowerCase().includes("gaming"))
            .slice(0, 15)
        );
        setArrAsus(
          data
            .filter((item) => item.ten_sp.toLowerCase().includes("asus"))
            .slice(0, 15)
        );
        setArrProductHot(data.filter((item) => item.hot === 1).slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="mt-4">
      <WrapperSection></WrapperSection>
      <div className="mb-6 flex items-center justify-between">
        <div className="w-[294px] h-[147px]">
          <img
            src="https://file.hstatic.net/200000722513/file/ban-phim-co-homepage_708921960ed34559ad91e43d4fcd6051.png"
            alt=""
            className="w-full h-full obejct-cover"
          />
        </div>
        <div className="w-[294px] h-[147px]">
          <img
            src="https://file.hstatic.net/200000722513/file/sub_banner_2_-_man_hinh_may_tinh_ce1ffd3f60d84b748e909ff52901eb90.png"
            alt=""
            className="w-full h-full obejct-cover"
          />
        </div>
        <div className="w-[294px] h-[147px]">
          <img
            src="https://file.hstatic.net/200000722513/file/sub_banner_3_-_chuot_gaming_8f5a97d8af894c919165ed7ef0e2cd77.png"
            alt=""
            className="w-full h-full obejct-cover"
          />
        </div>
        <div className="w-[294px] h-[147px]">
          <img
            src="https://file.hstatic.net/200000722513/file/sub_banner_4_-_pc_van_phong_2865fd86b8b24dfc90be4bfa33733f91.png"
            alt=""
            className="w-full h-full obejct-cover"
          />
        </div>
      </div>
      <PopularList arr={popular}></PopularList>
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
      <ProductList title={"Sản phẩm hot !!"} arr={arrProductHot}></ProductList>
      <ProductList
        title={"Laptop gaming bán chạy"}
        arr={arrGaming}
      ></ProductList>
      <ProductList title={"Asus gaming bán chạy"} arr={arrAsus}></ProductList>
      <div className="flex items-center justify-between mt-4 h-[253px]">
        <div className="w-[795px h-full ">
          <img
            src="https://file.hstatic.net/200000722513/file/banner_man_hinh_1580x510__1__2df9691545ea4ae7a64c5692cfcc5ec3.png"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="w-[389px] h-[120px]">
            <img
              src="https://file.hstatic.net/200000722513/file/laptop-rtx-40-series-combo-3-banner_d5b482d4f755472c8ea8967d6f640a40.png"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-[389px] h-[120px]">
            <img
              src="https://file.hstatic.net/200000722513/file/laptop-rtx-40-series-combo-3-banner_d5b482d4f755472c8ea8967d6f640a40.png"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
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
                src="https://file.hstatic.net/200000722513/file/bottom_1_-_laptop_van_phong_460758e56b684c108572a76fe1ae2610.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[317px] h-[159px]">
              <img
                src="https://file.hstatic.net/200000722513/file/bottom_2_-_laptop_gaming_e0e3d09a913f4c2ea9014f1c6d6d8ecf.png"
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
              src="https://file.hstatic.net/200000722513/file/right_2_-_asus_rog_ally_8a754b24bf2c448693b1a3d94d81ddd6.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[317px] h-[159px]">
            <img
              src="https://file.hstatic.net/200000722513/file/right_3_-_pc_gaming_4a55a103e23c4647bdf826831750e2d2.png"
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
