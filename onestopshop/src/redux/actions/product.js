import { FETCH_PRODUCT_DETAIL } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://e5f9a584.ngrok.io/"
});

export const fetchProductDetail = productID => async dispatch => {
  try {
    const res = await axios.get(
      `http://e5f9a584.ngrok.io/api/products/${productID}/`
    );
    const product = res.data;
    dispatch({ type: FETCH_PRODUCT_DETAIL, payload: product });
  } catch (error) {
    console.error(error);
  }
};
