import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { BsYoutube, BsCameraVideo, BsBell, BsPersonCircle } from "react-icons/bs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
