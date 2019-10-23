import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import moment from "moment";

// import * as actionCreators from "../redux/actions";
// import { connect } from "react-redux";

class OrderHistoryCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.order_ref.toUpperCase()}</td>
        <td>{moment(this.props.order.date_time).format("MMMM Do YYYY, h:mm:ss a")}</td>
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
