import React, { Component } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import { Link, Redirect } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

class OrderHistoryDetailCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.order_ref}</td>
        <td>{this.props.order.date_time}</td>
        <td>
          {this.props.order.baskets.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
              <li>{item.product.name}</li>
              </ul>
            </>
          ))}
        </td>
        <td>
          {this.props.order.baskets.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
                <li> {item.quantity}</li>
              </ul>
            </>
          ))}
        </td>
        <td>
          {this.props.order.baskets.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
              <li>{item.product.price}</li>
              </ul>
            </>
          ))}
        </td>
        <td>{this.props.order.total}</td>
        <td>{this.props.order.address}</td>
      </tr>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.rootProducts.products,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(OrderHistoryDetailCard);
