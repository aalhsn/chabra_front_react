import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class ShoppingCard extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            style={{ height: 50, width: 50 }}
            src={this.props.orderItem.img}
            alt={this.props.orderItem.name}
          />
        </td>
        <td>{this.props.orderItem.name}</td>
        <td>{this.props.orderItem.quantity}</td>
        <td className="text-right">{this.props.orderItem.price}</td>
        <td className="text-right">
          <button className="btn btn-sm btn-danger">
            <i className="fa fa-trash"></i>{" "}
          </button>
        </td>
      </tr>
    );
  }
}
export default ShoppingCard;
