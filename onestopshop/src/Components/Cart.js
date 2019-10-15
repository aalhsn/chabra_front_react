import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { addItem, removeItem } from "../redux/actions";

class Cart extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <h5>Cart</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.cartReducer.addedItems,
    products: state.rootProducts.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: productID => dispatch(addItem(productID)),
    removeItem: productID => dispatch(removeItem(productID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
