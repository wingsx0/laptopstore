import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../sagas/laptop/laptopSlice";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(setQuery(value));
    navigate("/search");
  };
  useEffect(() => {
    dispatch(setQuery(""));
  }, [dispatch]);
  return (
    <div className="search relative h-12 w-[415px]">
      <form action="" onSubmit={handleSubmitSearch} className="w-full h-full">
        <input
          type="text"
          placeholder="Bạn cần tìm gì ?"
          className="w-full h-full px-4 py-2 text-black bg-white rounded pr-14"
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          className="absolute text-black top-2/4 right-4 -translate-y-2/4"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
