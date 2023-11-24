import React from "react";
const SearchPage = () => {
  return (
    <div>
      <div className="banner">
        <img
          src="https://file.hstatic.net/200000722513/file/gearvn-combo-gaming-gear-chunli-sf6-new_081ad2a50a2d40d8b0107bef7d5b6ec4.jpg"
          alt=""
          className="mb-4 rounded"
        />
      </div>
      <div></div>
      <div className="py-6 bg-white">
        <span>Đang tìm kiếm với từ khóa</span> <span></span>
        <header className="p-6">
          <div>
            <div className="inline-block px-3 py-2 text-xs font-medium border border-gray-300 rounded">
              <i class="fa-solid fa-arrow-up-wide-short"></i>
              <span className="mx-2">Xắp theo:</span>
              <span>
                <span className="font-semibold">Nổi bật</span>
                <i className="px-2 fa-solid fa-caret-down"></i>
              </span>
            </div>
          </div>
        </header>
        <div className="flex flex-wrap gap-2 px-2">
          {/* {arr?.length > 0 &&
            arr.map((item) => <Card key={item.id_sp} item={item}></Card>)} */}
        </div>
        <div className="flex items-center justify-center py-10 paginate"></div>
      </div>
    </div>
  );
};

export default SearchPage;
