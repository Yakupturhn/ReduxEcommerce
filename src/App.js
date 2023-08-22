import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

function App() {
  const { drawer } = useSelector((state) => state.drawer);
  console.log(drawer);
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>

          {drawer && <Cart />}
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
