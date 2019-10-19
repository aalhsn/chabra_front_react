import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
