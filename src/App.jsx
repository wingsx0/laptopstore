import "./App.css";
import "swiper/css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="w-[1200px] mx-auto ">
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
