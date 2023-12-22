import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Login from "./components/form/login/Login";
import Register from "./components/form/register/Register";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
