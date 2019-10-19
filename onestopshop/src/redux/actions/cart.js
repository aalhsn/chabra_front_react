import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./actionTypes";
// import axios from "axios";

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

// export const checkout = order => async dispatch => {
//   try {
//     const res = await axios.post("http://127.0.0.1:8000/api/order/", order);
//     const product = res.data;
//     dispatch({ type: CHECKOUT, payload: product });
//   } catch (error) {
//     console.error(error);
//   }
// };
