import { FETCH_PRODUCT_DETAIL } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const fetchProductDetail = productID => async dispatch => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/products/${productID}/`
    );
    const product = res.data;
    dispatch({ type: FETCH_PRODUCT_DETAIL, payload: product });
  } catch (error) {
    console.error(error);
  }
};
