import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const AuthContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const InitialState = { user: null };

export const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  function LOGIN(data) {
    localStorage.setItem("userData", JSON.stringify(data));
    dispatch({ type: "LOGIN", payload: data });
  }

  function LOGOUT() {
    localStorage.removeItem("userData");
    dispatch({ type: "LOGOUT" });
  }

  async function getUserData() {
    try {
      const response = await axios.get("http://localhost:8000/validate-token", {
        withCredentials: true,
      });

      if (response.data.success) {
        LOGIN(response.data.user);
      } else {
        // toast.error(response);
        console.log("response:", response);
      }
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ state, LOGIN, LOGOUT }}>
      {children}
    </AuthContext.Provider>
  );
};
