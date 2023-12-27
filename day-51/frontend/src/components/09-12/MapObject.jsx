import React from "react";

const MapObject = ({ myFruitsData }) => {
  console.log(myFruitsData, "myFruitsData");
  return (
    <div>
      {myFruitsData.map((fruitData) => (
        <div>
          <img height={500} src={fruitData.img} />
          <h1>{fruitData.name}</h1>
          <p>{fruitData.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MapObject;
