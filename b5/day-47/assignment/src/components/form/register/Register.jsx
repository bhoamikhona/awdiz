import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../form.css";

function ChildComponent({ ChangeValue }) {
  return (
    <input
      type="text"
      name="name"
      placeholder="Name"
      autoComplete="off"
      onChange={ChangeValue}
    />
  );
}

const Register = () => {
  const router = useNavigate();
  const [nameValue, setNameValue] = useState(``);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function ChangeValue(e) {
    setNameValue(e.target.value);
  }

  console.log(`userData: `, userData);
  async function handleSubmit(e) {
    e.preventDefault();
    if (userData.email && userData.password && userData.confirmPassword) {
      if (userData.password === userData.confirmPassword) {
        try {
          const response = {
            data: { success: true, message: `Registration Complete.` },
          };

          if (response.data.success === true) {
            toast.success(response.data.message);
            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            router("/products");
          }
        } catch (error) {
          alert(error);
          toast(error.response.data.message);
        }
      } else {
        toast.error(`Password and Confirm Password do not match.`);
      }
    } else {
      toast.error(`All fields are required.`);
    }
  }

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Hello, {nameValue}</h1>
        <ChildComponent ChangeValue={ChangeValue} HandleChange={handleChange} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
          onChange={handleChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
