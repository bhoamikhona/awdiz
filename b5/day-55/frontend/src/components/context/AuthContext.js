// useContext
import { createContext, useEffect, useReducer } from "react";

export const MyContext = createContext();

// keep small number of data in initial state otherwise it will take long time to load
const InitialState = { user: null, test: "Bhoami" }; // _id, name, number, email

// action : {type: 'LOGIN', payload: {name:"bhoami", email:"bhoami@example.com"}}
const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }; // action.payload will be an object where it will have user's info eg userName, email, password etc.
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// higher order component
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  async function getCurrentUserData() {
    try {
      // const response = await axios.post(
      //   `http://localhost:8000/get-current-user`,
      //   { token }
      // );
      const response = {
        data: {
          success: true,
          user: {
            name: "Bhoami",
            email: "bhoami@example.com",
          },
        },
      };

      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.user });
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(`my-token`));
    if (token) {
      getCurrentUserData();
    }
  }, []);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default AuthContext;
