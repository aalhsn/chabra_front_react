import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrderHistoryCard from "./OrderHistoryCard";

class OrderHistory extends Component {
  //   totalPrice = () => {
  //     let total = 0;
  //     this.props.items.forEach(item => {
  //       total = total + parseFloat(item.price) * parseFloat(item.quantity);
  //     });
  //     return total;
  //   };
  render() {
    const getOrderList = this.props.orders.map(order => (
      <OrderHistoryCard key={order.ref} order={order} />
    ));

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Order History</h1>
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
                    {getOrderList}
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
    orders: state.cartReducer.orders,
    items: state.cartReducer.items,
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(OrderHistory);
