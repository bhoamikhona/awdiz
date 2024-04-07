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

function App() {
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
