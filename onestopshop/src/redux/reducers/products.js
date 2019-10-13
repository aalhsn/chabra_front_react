import { FETCH_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const authors = action.payload;
      return {
        ...state,
        products,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;