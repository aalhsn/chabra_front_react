import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";

const rootReducer = combineReducers({
  user: authReducer,
  errors: errorReducer,
  rootProducts: productsReducer,
});
export default rootReducer;
