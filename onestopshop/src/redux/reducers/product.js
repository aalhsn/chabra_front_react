import { FETCH_PRODUCT_DETAIL } from "../actions/actionTypes";

const initialState = {
  cache: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL:
      const product = action.payload;
      const cache = state.cache;
      cache[product.id] = product;
      return {
        ...state,
        cache: cache,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
