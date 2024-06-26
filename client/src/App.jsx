import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/06-03/Login.jsx";
import Register from "./components/06-03/Register.jsx";
import Counter from "./components/02-03/Counter.jsx";
import Welcome from "./components/03-03/Welcome.jsx";
import EffectOne from "./components/03-03/EffectOne.jsx";
import EffectTwo from "./components/03-03/EffectTwo.jsx";
import EffectThree from "./components/03-03/EffectThree.jsx";
import EffectFour from "./components/03-03/EffectFour.jsx";
import UseReducer from "./components/09-03/UseReducer.jsx";
import PropsDrilling from "./components/09-03/PropsDrilling.jsx";
import AllProducts from "./components/10-03/AllProducts.jsx";
import FakeStoreAllProducts from "./components/10-03/FakeStoreAllProducts.jsx";
import Todo from "./components/15-03/Todo.jsx";
import Theme from "./components/16-03/Theme.jsx";
import Navbar from "./components/global/Navbar.jsx";
import PageNotFound from "./components/16-03/PageNotFound.jsx";
import FakeStoreSingleProduct from "./components/16-03/FakeStoreSingleProduct.jsx";
import Render from "./components/16-03/Render.jsx";
import CurrencyConverter from "./components/17-03/CurrencyConverter.jsx";
import CounterRedux from "./components/20-03/CounterRedux.jsx";
import UseMemo from "./components/22-03/UseMemo.jsx";
import UseCallback from "./components/23-03/UseCallback.jsx";
import ThemeRedux from "./components/23-03/ThemeRedux.jsx";
import AddProduct from "./components/10-05/AddProduct.jsx";

function App() {
  const [students, setStudents] = useState(["a", "b", "c", "d"]);
  const [counter, setCounter] = useState(1234);
  const [products, setProducts] = useState([
    {
      name: "iPhone",
      image:
        "https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg",
    },
    {
      name: "iPad",
      image:
        "https://idestiny.in/wp-content/uploads/2023/06/icon-png_1-copy-14-1024x1024.png",
    },
    {
      name: "MacBook",
      image:
        "https://idestiny.in/wp-content/uploads/2023/06/icon-png_1-copy-10-1024x1024.png",
    },
    {
      name: "iWatch",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694712449/Croma%20Assets/Communication/Wearable%20Devices/Images/300950_0_fiowpa.png?tr=w-640",
    },
    {
      name: "iMac",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-orange-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697303855906",
    },
    {
      name: "AirPods",
      image:
        "https://as-images.apple.com/is/MME73_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1632861338000",
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/effect-1" element={<EffectOne />} />
        <Route path="/effect-2" element={<EffectTwo />} />
        <Route path="/effect-3" element={<EffectThree />} />
        <Route path="/effect-4" element={<EffectFour />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route
          path="/props-drilling"
          element={<PropsDrilling counter={counter} students={students} />}
        />
        <Route
          path="/all-products"
          element={<AllProducts products={products} />}
        />
        <Route path="/fake-all-products" element={<FakeStoreAllProducts />} />
        <Route
          path="/fake-single-product/:id"
          element={<FakeStoreSingleProduct />}
        />
        <Route path="/todo" element={<Todo />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/render" element={<Render />} />
        <Route path="/converter" element={<CurrencyConverter />} />
        <Route path="/counter-redux" element={<CounterRedux />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/theme-redux" element={<ThemeRedux />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
