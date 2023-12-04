import "./App.css";
import "swiper/css";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";
import NotFound from "./components/pages/NotFound";
import { useEffect } from "react";
import ProductPage from "./components/pages/ProductPage";
import SearchPage from "./components/pages/SearchPage";
import { useDispatch, useSelector } from "react-redux";
import { getListTypeProduct } from "./sagas/laptop/laptopSlice";
import PageLayout from "./components/layout/PageLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminHome from "./components/pages/admin/AdminHome";
import AdminAdd from "./components/pages/admin/AdminAdd";
import AdminListPage from "./components/pages/admin/AdminListPage";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListTypeProduct());
  }, [dispatch]);
  const { listTypeProduct } = useSelector((state) => state.laptop);
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailPage />} />
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
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/list" element={<AdminListPage />}></Route>
          <Route path="/admin/add" element={<AdminAdd />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
