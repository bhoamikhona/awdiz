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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
