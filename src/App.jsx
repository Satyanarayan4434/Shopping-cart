import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mainheader from "./components/Mainheader"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
