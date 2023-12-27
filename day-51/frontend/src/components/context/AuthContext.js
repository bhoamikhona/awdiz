// useContext
import { createContext, useReducer } from "react";

export const MyContext = createContext();

// keep small number of data in initial state otherwise it will take long time to load
const InitialState = { user: null, test: "Bhoami" }; // _id, name, number, email

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
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default AuthContext;
