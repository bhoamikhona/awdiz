import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";
import { Triangle } from "react-loader-spinner";

const Product = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  console.log(`single data:`, singleData);
  const getSingleProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setSingleData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);

  return (
    <>
      {Object.keys(singleData)?.length ? (
        <div className="card single-product-card">
          <div className="card-img-box">
            <img src={singleData.image} alt="product" className="card-img" />
          </div>
          <div className="card-info-box">
            <h1 className="product-name">{singleData.title}</h1>
            <p className="product-desc">{singleData.description}</p>
            <div className="carting">
              <span className="price">${singleData.price}</span>
              <button>Add</button>
            </div>
          </div>
        </div>
      ) : (
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#edf2ff"
          ariaLabel="triangle-loading"
        />
      )}
    </>
  );
};

export default Product;
