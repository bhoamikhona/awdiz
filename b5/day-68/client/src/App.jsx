import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
