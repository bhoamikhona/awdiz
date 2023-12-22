import React from "react";

const PropsMaps = ({ myName, myAge, ChangeName, myFruits }) => {
  console.log("Props: ", myName, myAge, myFruits);
  return (
    <div>
      <ul>
        {myFruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>

      <h1>{myName}</h1>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  );
};

export default PropsMaps;
