import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT
} from "../actions/actionTypes";

const initialState = {
  items: [],
  orders: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      let checkItem = state.items.find(item => item.id === newItem.id);
      if (checkItem) {
        checkItem.quantity += newItem.quantity;
        console.log("Cart reducer item:", checkItem);
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(newItem)
        };
      }

    case REMOVE_FROM_CART:
      const removedItem = action.payload;
      let updatedItems = state.items.filter(item => item !== removedItem);
      return {
        ...state,
        items: updatedItems
      };

    case CHECKOUT:
      return {
        orders: state.orders.concat(action.payload),
        items: []
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
