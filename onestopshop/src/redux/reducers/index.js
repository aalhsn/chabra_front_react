import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";

export default combineReducers({
  user: authReducer,
  errors: errorReducer
});
