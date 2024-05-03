import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/auth/validate-token").then((response) => {
      if (response.data.success) {
        console.log(response);
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });
  });

  return <div>Dashboard</div>;
}

export default Dashboard;
