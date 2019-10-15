import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  addedItems: [
    {
      orderItem: {
        id: 1,
        name: "Apples",
        quantity: 4,
        price: 1.5
      }
    },
    {
      orderItem: {
        id: 2,
        name: "Strawberries",
        quantity: 3,
        price: 0.8
      }
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addItem = action.payload;
      return {
        ...state,
        addedItems: state.addedItems.push(addItem)
      };
    case REMOVE_FROM_CART:
      const removeItem = action.payload;
      const newItems = state.addedItems.filter(item => {
        return item !== removeItem;
      });
      return {
        ...state,
        addedItems: newItems
      };

    default:
      return state;
  }
};

export default reducer;
