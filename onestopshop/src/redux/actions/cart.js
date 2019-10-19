import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./actionTypes";
// import axios from "axios";
import instance from "./instance"

export const addItem = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_FROM_CART,
  payload: item
});

// export const checkout = order => ({
//   type: CHECKOUT,
//   payload: order
// });

export const checkout = order_items => async dispatch => {
  try {
    const res = await instance.post("items/", order_items);
    console.log("response:", res)
    dispatch({ type: CHECKOUT, payload: res.data});
  } catch (error) {
    console.error(error);
  }
};
