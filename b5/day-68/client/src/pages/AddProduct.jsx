import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    productName: "",
    price: 0,
    quantity: 0,
    category: "",
    image: "",
  });

  const addProduct = async function (e) {
    e.preventDefault();

    const { productName, price, quantity, category, image } = data;

    try {
      const { data } = await axios.post("/product/add-product", {
        productName,
        price,
        quantity,
        category,
        image,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Product Added");
        navigate("/all-products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={addProduct}>
        <h1>Add Product</h1>
        <label>Product Name</label>
        <input
          type="text"
          value={data.productName}
          onChange={(e) => setData({ ...data, productName: e.target.value })}
        />

        <label>Price</label>
        <input
          type="number"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />

        <label>Quantity</label>
        <input
          type="number"
          value={data.quantity}
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
        />

        <label>Category</label>
        <input
          type="text"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        />

        <label>Image</label>
        <input
          type="text"
          value={data.image}
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
