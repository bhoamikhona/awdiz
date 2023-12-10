import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoPageFound from "./components/NoPageFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/08-12/UseEffect2";
import UseEffect3 from "./components/08-12/UseEffect3";
import UseEffect4 from "./components/08-12/UseEffect4";
import UseParams from "./components/08-12/UseParams";
import DynamicRouting from "./components/08-12/DynamicRouting";
import PropsMaps from "./components/09-12/PropsMaps";
import MapObject from "./components/09-12/MapObject";
import StyledComponent from "./components/09-12/StyledComponent";
import { useState } from "react";

function App() {
  const [myName, setMyName] = useState("Bhoami");
  const fruit1 = {
    id: 1,
    img: "https://i.pinimg.com/564x/d1/7a/77/d17a77389b34daabcfdd58d78fce5c5d.jpg",
    name: "Strawberry",
    price: "₹420 per kg",
  };

  const fruit2 = {
    id: 2,
    img: "https://i.pinimg.com/564x/cc/f2/a6/ccf2a62d89c0bc33880e119c9f576a17.jpg",
    name: "Cherry",
    price: "₹600 per kg",
  };

  const fruit3 = {
    id: 3,
    img: "https://i.pinimg.com/564x/d4/4b/d9/d44bd99516b8557ee5551818d9694765.jpg",
    name: "Orange",
    price: "₹70 per kg",
  };

  const [myFruits, setFruits] = useState([fruit1, fruit2, fruit3]);

  function ChangeName() {
    setMyName("Bhoami K Khona");
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<NoPageFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-2" element={<UseEffect2 />} />
        <Route path="/use-effect-3" element={<UseEffect3 />} />
        <Route path="/use-effect-4" element={<UseEffect4 />} />
        <Route path="/dynamic-routing" element={<DynamicRouting />} />
        <Route path="/use-params/:age" element={<UseParams />} />
        <Route
          path="/props-map"
          element={
            <PropsMaps
              myName={myName}
              myAge="25"
              ChangeName={ChangeName}
              myFruits={["strawberry", "cherry", "orange"]}
            />
          }
        />
        <Route
          path="/map-object"
          element={<MapObject myFruitsData={myFruits} />}
        />
        <Route path="/styled-component" element={<StyledComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
