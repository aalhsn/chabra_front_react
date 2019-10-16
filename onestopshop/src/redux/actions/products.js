import { FETCH_PRODUCTS } from "./actionTypes";

import axios from "axios";

/**
 * Import your instance?
 */
const instance = axios.create({
  baseURL: "https://e5f9a584.ngrok.io/"
});

export const fetchProducts = () => async dispatch => {
  try {
    const res = await instance.get("api/products/");
    const products = res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: products });
  } catch (error) {
    console.error(error);
  }
};
