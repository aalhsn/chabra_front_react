import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class CartButton extends Component {
  render() {
    return <FontAwesomeIcon style={{ color: "blue" }} icon={faShoppingCart} />;
  }
}

export default CartButton;
