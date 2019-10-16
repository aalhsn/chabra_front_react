import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
// import { Link, Redirect } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class OrderHistoryCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.ref}</td>
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
export default OrderHistoryCard;
