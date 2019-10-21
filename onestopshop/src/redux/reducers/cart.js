import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT, 
  FETCH_ORDERS
} from "../actions/actionTypes";

const initialState = {
  products: [],
  orders: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = action.payload;
      let checkProduct = state.products.find(product => product.id === newProduct.id);
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

    case REMOVE_FROM_CART:
      const removedProduct = action.payload;
      let updatedProducts = state.products.filter(product => product !== removedProduct);
      return {
        ...state,
        products: updatedProducts,
     
      };

    case CHECKOUT:
      return {
        products: [],
        orders:state.orders.concat(action.payload)
      };
    case FETCH_ORDERS:
      const orders = action.payload
      return {
        ...state,
        orders: orders,
        loading : false
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
