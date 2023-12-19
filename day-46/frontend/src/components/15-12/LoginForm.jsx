import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const router = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  console.log(`loginData:`, loginData);

  const handleChange = function (e) {
    // console.log(e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (loginData.email && loginData.password) {
      try {
        // const response = await axios.post(`/http:localhost:8000/login`, {
        //   loginData,
        // });

        const response = {
          data: { success: true, message: `Login successful.` },
        };

        if (response.data.success) {
          toast.success(response.data.message);
          setLoginData({ email: "", password: "" });
          router("/");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    } else {
      toast.error(`All fields are mandatory`);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={loginData.email}
          autoComplete="off"
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={loginData.password}
          autoComplete="off"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
