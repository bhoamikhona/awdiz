import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/all-products")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="card">
          <div className="card-img-box">
            <img
              className="card-img"
              src={product.image}
              alt={product.productName}
            />
          </div>
          <div className="card-info">
            <h2>{product.productName}</h2>
            {/* <p>${product.price}</p>
            <p>{product.category}</p> */}
            <Link to={`/products/${product._id}`}>More Info</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
