import { combineReducers } from "redux";
import counterReducer from "./Counter.reducer.js";
import themeReducer from "./Theme.reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  // auth: authReducer,
});

export default rootReducer;
