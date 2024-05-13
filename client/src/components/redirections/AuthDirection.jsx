import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AuthDirection() {
  const router = useNavigate();
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (state?.user === null) {
      toast.error("Login to access this page");
      return router("/login");
    }
  }, [state]);
}

export default AuthDirection;
