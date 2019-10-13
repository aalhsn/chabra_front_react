import { FETCH_PRODUCTS } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
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