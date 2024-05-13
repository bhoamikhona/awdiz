import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { state } = useContext(AuthContext);
  // const [loading, setLoading] = useState(true);
  // const router = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    tags: "",
    img: "",
    userId: "663a884c2d055cb4a98858b0",
  });

  console.log(productData);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if user data is available
  //   if (state.user && state.user._id) {
  //     setProductData((prevData) => ({
  //       ...prevData,
  //       userId: state.user._id,
  //     }));
  //     setLoading(false);
  //   }
  // }, [state.user]);

  const handleChange = function (event) {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (
      productData.name &&
      productData.category &&
      productData.price &&
      productData.quantity &&
      productData.tags &&
      productData.img
    ) {
      try {
        const response = await axios.post(
          "http://localhost:8000/add-product",
          productData,
          { withCredentials: true }
        );
        // console.log(response);
        // toast.success(response.data.message);
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/all-products");
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else {
      toast.error("All fields are requried");
      console.log("triggered");
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!state.user) {
  //   return router("/login");
  // }

  return (
    <>
      <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="name">Product Name: </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              value={productData.name}
            />
          </div>
          <div className="input-control">
            <label htmlFor="category">Category: </label>
            <br />
            <input
              type="text"
              id="category"
              name="category"
              autoComplete="off"
              onChange={handleChange}
              value={productData.category}
            />
          </div>
          <div className="input-control">
            <label htmlFor="price">Price: </label>
            <br />
            <input
              type="text"
              id="price"
              name="price"
              autoComplete="off"
              onChange={handleChange}
              value={productData.price}
            />
          </div>
          <div className="input-control">
            <label htmlFor="quantity">Quantity: </label>
            <br />
            <input
              type="text"
              id="quantity"
              name="quantity"
              autoComplete="off"
              onChange={handleChange}
              value={productData.quantity}
            />
          </div>
          <div className="input-control">
            <label htmlFor="tags">Tags: </label>
            <br />
            <input
              type="text"
              id="tags"
              name="tags"
              autoComplete="off"
              onChange={handleChange}
              value={productData.tags}
            />
          </div>
          <div className="input-control">
            <label htmlFor="img">Image: </label>
            <br />
            <input
              type="text"
              id="img"
              name="img"
              autoComplete="off"
              onChange={handleChange}
              value={productData.img}
            />
          </div>
          <div className="input-control">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
