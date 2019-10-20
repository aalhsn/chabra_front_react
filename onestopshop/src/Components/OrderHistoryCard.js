import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class OrderHistoryCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.order_ref}</td>
        <td>{this.props.order.date_time}</td>
        <td className="text-right">
        <Link to={`/order-details/${this.props.order.id}/`}>
            <button className="btn btn-lg btn-block btn-success">
              <FontAwesomeIcon icon={faList} />
            </button>
          </Link>
        </td>
      </tr>
    );
  }
}
export default OrderHistoryCard;
