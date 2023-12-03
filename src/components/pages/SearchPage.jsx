import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import axios from "axios";
import ButtonFilter from "../button/ButtonFilter";
const SearchPage = () => {
  const itemsPerPage = 30;
  const [itemOffset, setItemOffset] = useState(0);
  const [listSearchProduct, setListSearchProduct] = useState([]);
  const { query, selectKeyword } = useSelector((state) => state.laptop);
  React.useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/laptop/sanpham/search?query=${query}`
        );
        const data = res.data;
        if (selectKeyword === "ascending") {
          const newArr = data.slice().sort((a, b) => a.gia_km - b.gia_km);
          setListSearchProduct(newArr);
        } else if (selectKeyword === "increasing") {
          const newArr = data.slice().sort((a, b) => b.gia_km - a.gia_km);
          setListSearchProduct(newArr);
        } else if (selectKeyword === "hot") {
          const newArr = data.slice().filter((item) => item.hot === 1);
          setListSearchProduct(newArr);
        } else {
          setListSearchProduct(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleGetProducts();
  }, [query, selectKeyword]);
  const pageCount = Math.ceil(listSearchProduct?.length / itemsPerPage);
  const toIndex = itemOffset + itemsPerPage;
  const arr = listSearchProduct?.slice(itemOffset, toIndex);
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % listSearchProduct?.length;
    setItemOffset(newOffset);
  };
  console.log(listSearchProduct, selectKeyword);
  return (
    <div>
      <div className="mt-3 banner">
        <img
          src="https://file.hstatic.net/200000722513/file/gearvn-combo-gaming-gear-chunli-sf6-new_081ad2a50a2d40d8b0107bef7d5b6ec4.jpg"
          alt=""
          className="mb-4 rounded"
        />
      </div>
      <div className="py-6 bg-white">
        <GetQuery query={query}></GetQuery>
        <header className="p-6">
          {/* <div>
            <div className="inline-block px-3 py-2 text-xs font-medium border border-gray-300 rounded">
              <i className="fa-solid fa-arrow-up-wide-short"></i>
              <span className="mx-2">Xắp theo:</span>
              <span>
                <span className="font-semibold">Nổi bật</span>
                <i className="px-2 fa-solid fa-caret-down"></i>
              </span>
            </div>
          </div> */}
          <ButtonFilter></ButtonFilter>
        </header>
        <div className="flex flex-wrap gap-2 px-2">
          {arr?.length > 0 &&
            arr.map((item) => <Card key={item.id_sp} item={item}></Card>)}
        </div>
        <div className="flex items-center justify-center py-10 paginate">
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

function GetQuery({ query }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <span className="text-2xl font-semibold uppercase">Tìm kiếm</span>
      <span className="text-sm font-normal">
        Đang tìm kiếm theo <span className="font-semibold">{query}</span>
      </span>
    </div>
  );
}

export default SearchPage;
