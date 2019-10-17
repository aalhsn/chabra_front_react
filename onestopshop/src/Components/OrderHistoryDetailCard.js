import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";
// import { Link, Redirect } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class OrderHistoryDetailCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.ref}</td>
        <td>{this.props.order.date}</td>
        <td>
          {this.props.order.items.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
                <li> {item.name}</li>
              </ul>
            </>
          ))}
        </td>
        <td>
          {this.props.order.items.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
                <li> {item.quantity}</li>
              </ul>
            </>
          ))}
        </td>
        <td>
          {this.props.order.items.map(item => (
            <>
              <ul style={{ listStyleType: "none" }}>
                <li> {item.price}</li>
              </ul>
            </>
          ))}
        </td>
        <td>{this.props.order.total_order_price}</td>
        <td>{this.props.order.address}</td>
      </tr>
    );
  }
}
export default OrderHistoryDetailCard;
