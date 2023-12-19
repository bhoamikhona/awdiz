import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Login from "./components/form/login/Login";
import Register from "./components/form/register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
