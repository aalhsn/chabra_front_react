import { FETCH_PRODUCT_DETAIL } from "../actions/actionTypes";

const initialState = {
  product: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL:
      const product = action.payload;
      return {
        ...state,
        product: product,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
