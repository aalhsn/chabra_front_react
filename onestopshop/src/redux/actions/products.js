import { FETCH_PRODUCTS } from "./actionTypes";

import instance from "./instance";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await instance.get("products/");
    const products = res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: products });
  } catch (error) {
    console.error(error);
  }
};
