import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderHistoryDetailCard from "./OrderHistoryDetailCard";
import { connect } from "react-redux";
// import * as actionCreators from "../redux/actions";

class OrderHistoryDetail extends Component {
  render() {
    const getOrderDetails = this.props.orders.map(order => (
      <OrderHistoryDetailCard key={order.ref} order={order} />
    ));

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Order Detail</h1>
          </div>
        </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col" className="text-center">
                        Date
                      </th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrderDetails}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/products">
                    <button className="btn btn-block btn-light">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.cartReducer.orders
  };
};

export default connect(mapStateToProps)(OrderHistoryDetail);
