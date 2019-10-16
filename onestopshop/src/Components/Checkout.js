import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { checkout } from "../redux/actions";
import ShoppingCard from "./ShoppingCard";
import moment from "moment";

class Checkout extends Component {
  state = {
    address: "",
    total: 0
  };

  totalPrice = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.price) * parseInt(item.quantity);
    });
    return total.toFixed(3);
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  OrderNumber = () => {
    let total = Math.random()
      .toString(36)
      .toUpperCase();
    return total.substr(5, 8);
  };

  handleClick = () => {
    const newOrder = {
      id: "need it from backend",
      ref: "CH" + this.OrderNumber(),
      items: this.props.items,
      total_order_price: this.totalPrice(),
      address: this.state.address,
      date: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a"),
      customer: this.props.user
    };
    this.props.checkout(newOrder);
    alert(this.props.orders);
  };
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    const getOrderItems = this.props.items.map(item => (
      <ShoppingCard key={item.name} orderItem={item} />
    ));

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Order Summary</h1>
          </div>
        </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrderItems}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">{this.totalPrice()} KWD</td>
                    </tr>
                    <tr>
                      <td>Shipping Address</td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          onChange={this.changeHandler}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6"></div>
                <div className="col-sm-12 col-md-6 text-right">
                  <Link to="/">
                    <button
                      onClick={() => this.handleClick()}
                      className="btn btn-lg btn-block btn-success text-uppercase"
                    >
                      Checkout!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkout: order => dispatch(checkout(order))
  };
};

const mapStateToProps = state => {
  return {
    orders: state.cartReducer.orders,
    items: state.cartReducer.items,
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
