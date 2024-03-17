import { createContext, useEffect, useReducer } from "react";

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

const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  function LOGIN(data) {
    dispatch({ type: "LOGIN", payload: data });
  }

  function LOGOUT() {
    dispatch({ type: "LOGOUT" });
  }

  async function getUserDataa(token) {
    try {
      // const response = await axios.post('/validate-token', {token})
      const response = {
        data: {
          success: true,
          userData: { name: "Bhoami", email: "bhoami@email.com" },
        },
      };
      if (response.data.success) {
        LOGIN(response.data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      getUserDataa(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, LOGIN, LOGOUT }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
