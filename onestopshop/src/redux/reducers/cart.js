import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
  CHECKOUT,
  SET_PROFILE,

} from "../actions/actionTypes";

const initialState = {
  products: [],
  orders: [],
  loading: true,
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = action.payload;
      let checkProduct = state.products.find(
        product => product.id === newProduct.id
      );
      if (checkProduct) {
        checkProduct.quantity += newProduct.quantity;
        return {
          ...state,
          products: [...state.products]
        };
      } else {
        return {
          ...state,
          products: state.products.concat(newProduct)
        };
      }

    case CHANGE_QUANTITY:
      const quantity = action.payload;
      console.log(quantity);
      return {
        ...state,
        quantity: state.quantity + quantity
      };

    case REMOVE_FROM_CART:
      const removedProduct = action.payload;
      let updatedProducts = state.products.filter(
        product => product !== removedProduct
      );
      return {
        ...state,
        products: updatedProducts
      };

    case CHECKOUT:
      return {
        orders: state.orders.concat(action.payload),
        products: []
      };
    case SET_PROFILE:
      const orders = action.payload;
      return {
        ...state,
        orders: orders.order_history,
        loading: false
      };


    default:
      return {
        ...state
      };
  }
};

export default reducer;
