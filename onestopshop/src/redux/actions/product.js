import { FETCH_PRODUCT_DETAIL } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://chabra.herokuapp.com/"
});

export const fetchProductDetail = productID => async dispatch => {
  try {
    const res = await axios.get(
      `https://chabra.herokuapp.com/api/products/${productID}/`
    );
    const product = res.data;
    dispatch({ type: FETCH_PRODUCT_DETAIL, payload: product });
  } catch (error) {
    console.error(error);
  }
};
