import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
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
    if (!this.props.user) return <Redirect to="/" />;
    const getOrderList = this.props.orders.map(order => (
      <OrderHistoryCard key={order.id} order={order} />
    ));

    return (
    
          <div className="container text-center">
          <section id="overlay" className="single-section">
            <h1 style={{color:"black", marginTop:230, fontSize:"4em"}}>Order History</h1>
            </section>
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Order Ref.</th>
                      <th scope="col">
                        Date
                      </th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrderList}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/home">
                    <button className="btn btn-block btn-secondary">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.cartReducer.orders,
    products: state.cartReducer.products,
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(OrderHistory);
