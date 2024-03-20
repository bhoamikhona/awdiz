import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const router = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      router("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Redirecting you to Home Page in 3 sec...</p>
    </div>
  );
}

export default PageNotFound;
