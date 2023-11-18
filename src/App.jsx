import "./App.css";
import "swiper/css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/pages/DetailPage";
function App() {
  return (
    <div>
      <Header></Header>
      <div className="w-[1200px] mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path={`/product/:id`} element={<DetailPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
