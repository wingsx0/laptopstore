import "./App.css";
import "swiper/css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";
import NotFound from "./components/pages/NotFound";
import { useEffect } from "react";
import ProductPage from "./components/pages/ProductPage";
import SearchPage from "./components/pages/SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { getListTypeProduct } from "./sagas/laptop/laptopSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListTypeProduct());
  }, [dispatch]);
  const { listTypeProduct } = useSelector((state) => state.laptop);
  return (
    <div>
      <Header></Header>
      <div className="w-[1200px] mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path={`/product/:id`} element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchPage />} />
          {listTypeProduct.length > 0 &&
            listTypeProduct.map((item) => {
              const nameProduct = item.ten_loai.toLowerCase();
              return (
                <Route
                  key={item.id_loai}
                  path={nameProduct}
                  element={<ProductPage key={item.id_loai} id={item.id_loai} />}
                />
              );
            })}
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
