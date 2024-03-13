import React from "react";
import "./AllProducts.css";

export default function AllProducts({ products }) {
  return (
    <div className="products-container">
      {products.map(({ name, image }) => (
        <div className="product-card">
          <div className="product-img-container">
            <img src={image} alt={name} className="product-img" />
          </div>
          <h1 className="product-name">{name}</h1>
        </div>
      ))}
    </div>
  );
}
