import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const removeItem = item => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item
  });
};
