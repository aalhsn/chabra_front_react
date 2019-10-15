import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";
import productReducer from "./product";

const rootReducer = combineReducers({
  authReducer: authReducer,
  errors: errorReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer
});
export default rootReducer;
