import "./Products.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Triangle } from "react-loader-spinner";
import toast from "react-hot-toast";
import "../Card/Card.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const pageNavigate = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };

  return (
    <div>
      {/* <div className="products">
        {data?.length ? (
          data.map(({ id, title, price, description, image }) => {
            return (
              <Card
                route={() => pageNavigate(id)}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
              />
            );
          })
        ) : (
          <Triangle
            visible={true}
            height="100"
            width="100"
            color="#edf2ff"
            ariaLabel="triangle-loading"
          />
        )}
      </div> */}

      {data?.length ? (
        <div className="products">
          {data.map(({ id, title, price, image, description }) => (
            <div onClick={() => pageNavigate(id)} className="card">
              <div className="img-box">
                <img className="img" src={image} alt="product" />
              </div>
              <div className="info-box">
                <h2 className="title">{title}</h2>
                <p className="desc">{description}</p>

                <div className="carting">
                  <span className="price">${price}</span>
                  <button>Add</button>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Products;
