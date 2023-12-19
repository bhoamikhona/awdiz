import React from "react";
import "./Card.css";

const Card = ({ id, title, price, description, image }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img className="img" src={image} alt="product" />
      </div>
      <div className="info-box">
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>

        <div className="carting">
          <span className="price">${price}</span>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
