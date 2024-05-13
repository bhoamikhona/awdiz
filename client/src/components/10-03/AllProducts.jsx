import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import axios from "axios";

export default function AllProducts({ products }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("http://localhost:8000/get-products");
        if (response?.data?.success) {
          console.log(response.data.products);
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  });

  return (
    <div className="products-container">
      {allProducts.length ? (
        allProducts.map(({ name, img }) => (
          <div className="product-card">
            <div className="product-img-container">
              <img src={img} alt={name} className="product-img" />
            </div>
            <h1 className="product-name">{name}</h1>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
