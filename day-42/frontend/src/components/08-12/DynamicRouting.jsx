import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DynamicRouting = () => {
  const router = useNavigate();

  const [myAge, setMyAge] = useState(23);

  return (
    <>
      <h1>DynamicRouting</h1>
      <button onClick={() => router(`/use-params/${myAge}`)}>Routing</button>
    </>
  );
};

export default DynamicRouting;
