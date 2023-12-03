import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListTypeProduct } from "../../sagas/laptop/laptopSlice";
const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListTypeProduct());
  }, [dispatch]);
  const { listTypeProduct } = useSelector((state) => state.laptop);
  return (
    <ul className=" bg-white w-[216px] h-[496px] rounded">
      {listTypeProduct?.length > 0 &&
        listTypeProduct.map((item) => (
          <Link to={item.ten_loai.toLowerCase()} key={item.id_loai}>
            <li className="p-4 py-2 text-base font-medium transition-all cursor-pointer hover:bg-primary hover:text-white">
              Laptop {item.ten_loai}
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default Menu;
