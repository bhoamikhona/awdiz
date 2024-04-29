import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function Register() {
  const router = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = function (event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      // await calling backend -> one server to another server request -> backend validation -> data to store mongodb

      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/register",
          userData
        );
        console.log(response);
        // return res
        //   .status(201)
        //   .json({ success: true, message: "Registration Completed." });

        // const response = {
        //   data: { success: true, message: "Registration Completed." },
        // };

        if (response.data.success) {
          toast.success(response.data.message);
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          router("/login");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-control">
          <label htmlFor="name">Name: </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            // required
            autoComplete="off"
            onChange={handleChange}
            value={userData.name}
          />
        </div>
        <div className="input-control">
          <label htmlFor="email">Email: </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            // required
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
            // required
            autoComplete="off"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="input-control">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            // required
            autoComplete="off"
            onChange={handleChange}
            value={userData.confirmPassword}
          />
        </div>
        <div className="input-control">
          {/* <input type="submit" value="Register" /> */}
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
