import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css";
import { useNavigate } from "react-router-dom";

export default function FakeStoreAllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  // console.log(allProducts);
  const [filterProducts, setFilterProducts] = useState([]);

  const [search, setSearch] = useState("");

  const router = useNavigate();

  const getProducts = async function () {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function redirect(id) {
    // alert(id);
    router(`/fake-single-product/${id}`);
  }

  const handleChange = function (e) {
    console.log(e.target.value);
    setSearch(e.target.value);

    let userword = e.target.value.toLowerCase();

    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(userword);
    });

    console.log("filteredProducts", filteredProducts);
    setFilterProducts(filteredProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Fake Store All Products</h1>

      <div>
        <label htmlFor="search">Search Product:</label>
        <input
          value={search}
          type="text"
          placeholder="Men Cotton Jacket"
          onChange={handleChange}
        />
      </div>

      {filterProducts?.length ? (
        <div className="products-container">
          {filterProducts.map(({ title, image, id }) => (
            <div onClick={() => redirect(id)} className="product-card">
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
