import React, { useState } from "react";

const Js = () => {
  const [showText, setShowText] = useState(false);

  function Update() {
    setShowText(!showText);
  }
  return (
    <div>
      <button onClick={Update}>Toggle</button>
      {showText ? <div>true</div> : <div>false</div>}
    </div>
  );
};

export default Js;
