import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import axios from "axios";

export default function Login() {
  const { LOGIN } = useContext(AuthContext);

  const router = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = function (event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    if (userData.email && userData.password) {
      try {
        const response = await axios.post(
          "http://localhost:8000/login",
          userData,
          { withCredentials: true }
        );

        if (response.data.success) {
          LOGIN(response.data.userData);
          toast.success(response.data.message);
          setUserData({
            email: "",
            password: "",
          });

          router("/add-product");
        } else {
          // toast.error(response.data.message);
          // console.log(response);
        }
      } catch (error) {
        // console.log(error.response.data.message);
      }
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              onChange={handleChange}
              value={userData.email}
            />
          </div>
          <div className="input-control">
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              onChange={handleChange}
              value={userData.password}
            />
          </div>
          <div className="input-control">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
