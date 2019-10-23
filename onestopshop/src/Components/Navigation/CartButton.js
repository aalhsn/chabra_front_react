import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';

class CartButton extends Component {
  render() {
    return (
    <li>
    <Link to="/cart/" >
    <NotificationBadge id="bage" className="badge badge-pill badge-primary" style = {{transformY:200}} count={this.props.products.length !== 0 && this.props.products.length} effect={Effect.SCALE}/> 
    <FontAwesomeIcon  style={{ color: "#82ae46", marginRight:12 }} icon={faShoppingCart}/>
    </Link>
   </li>
    )
}
}

const mapStateToProps = state => {
  return {
    products: state.cartReducer.products
  };
};

export default connect(mapStateToProps)(CartButton);

