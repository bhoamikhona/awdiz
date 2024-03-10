import React from "react";
import Children from "./Children.jsx";

export default function PropsDrilling({ students, counter }) {
  return (
    <div>
      <Children students={students} counter={counter} />
    </div>
  );
}
