import React, { useState } from "react";
import axios from "axios";
// http://localhost:4000/laptop/loai/
const Menu = () => {
  const [arrType, setArrType] = useState([]);
  React.useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await axios.get("http://localhost:4000/laptop/loai/");
        const data = res.data;
        setArrType(data);
      } catch (err) {
        throw new Error("Error fetching data Menu component: " + err);
      }
    };
    fetchDate();
  }, []);
  return (
    <ul className=" bg-white w-[216px] h-[496px] rounded p-2">
      {arrType?.length > 0 &&
        arrType.map((item) => (
          <li
            key={item.id_loai}
            className="py-2 p-4 text-base font-medium hover:text-primary cursor-pointer"
          >
            Laptop {item.ten_loai}
          </li>
        ))}
    </ul>
  );
};

export default Menu;
