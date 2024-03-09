import "./App.css";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/effect-1" element={<EffectOne />} />
        <Route path="/effect-2" element={<EffectTwo />} />
        <Route path="/effect-3" element={<EffectThree />} />
        <Route path="/effect-4" element={<EffectFour />} />
      </Routes>
    </div>
  );
}

export default App;
