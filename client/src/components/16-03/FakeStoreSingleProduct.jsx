import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FakeStoreSingleProduct() {
  const [productData, setProductData] = useState();
  const { id } = useParams();

  async function getSingleProductData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);

  return (
    <div>
      <img src={productData?.image} alt={productData?.title} />
      <h1>{productData?.title}</h1>
    </div>
  );
}

export default FakeStoreSingleProduct;
