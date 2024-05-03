import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = function (e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;

    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      console.log(response);

      if (response.data.success) {
        setUser({});
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
