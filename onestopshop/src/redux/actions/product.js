import { FETCH_PRODUCT_DETAIL } from "./actionTypes";
import instance from "./instance"

export const fetchProductDetail = productID => async dispatch => {
  try {
    const res = await instance.get(`products/${productID}/`);
    const product = res.data;
    dispatch({ type: FETCH_PRODUCT_DETAIL, payload: product });
  } catch (error) {
    console.error(error);
  }
};
