import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./actionTypes";

export const addItem = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_FROM_CART,
  payload: item
});

export const checkout = order => ({
  type: CHECKOUT,
  payload: order
});
