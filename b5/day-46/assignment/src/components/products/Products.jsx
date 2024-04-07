import "./Products.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Products = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(`Response Data: `, response.data);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="products">
        {data.map(({ id, title, price, description, image }) => {
          return (
            <Card
              id={id}
              title={title}
              price={price}
              description={description}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
