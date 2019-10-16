import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
// import { Link, Redirect } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class OrderHistoryDetailCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.ref}</td>
        <td>
          this.props.order.items.map(item =>{" "}
          {<li>item.name item.price item.quantity </li>})
        </td>
        <td>{this.props.order.total}</td>
        <td>{this.props.order.address}</td>
        <td>{this.props.order.date}</td>
        <td className="text-right">
          <button className="btn btn-sm btn-danger">
            <FontAwesomeIcon icon={faList} />
          </button>
        </td>
      </tr>
    );
  }
}
export default OrderHistoryDetailCard;
