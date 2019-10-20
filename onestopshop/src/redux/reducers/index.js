import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";
import productReducer from "./product";
import cartReducer from "./cart";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  authReducer: authReducer,
  errors: errorReducer,
  rootProducts: productsReducer,
  rootProduct: productReducer,
  cartReducer: cartReducer,
  profileReducer: profileReducer
});
export default rootReducer;
