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

function App() {
  const [students, setStudents] = useState(["a", "b", "c", "d"]);
  const [counter, setCounter] = useState(1234);

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
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route
          path="/props-drilling"
          element={<PropsDrilling counter={counter} students={students} />}
        />
      </Routes>
    </div>
  );
}

export default App;
