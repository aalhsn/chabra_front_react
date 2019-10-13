import { combineReducers } from "redux";

import productsReducer from "./products";


const rootReducer = combineReducers({
  rootProducts: productsReducer,

});

export default rootReducer;