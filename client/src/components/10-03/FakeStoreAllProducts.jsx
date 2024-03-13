import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css";

export default function FakeStoreAllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  const getProducts = async function () {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response?.data.length) {
        setAllProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Fake Store All Products</h1>
      {allProducts?.length ? (
        <div className="products-container">
          {allProducts.map(({ title, image }) => (
            <div className="product-card">
              <div className="product-img-container">
                <img src={image} alt={title} className="product-img" />
              </div>
              <h2 className="product-name">{title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
