import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCard from "./ShoppingCard";

class ShoppingCart extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total;
  };
  render() {
    const getOrderItem = this.props.items.map(item => (
      <ShoppingCard key={item.name} orderItem={item} />
    ));

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Shopping Cart</h1>
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
                    {getOrderItem}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>{this.totalPrice()} KWD</strong>
                      </td>
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
                <div className="col-sm-12 col-md-6 text-right">
                  <Link to="/checkout" params={{ total: this.totalPrice() }}>
                    <button className="btn btn-lg btn-block btn-success text-uppercase">
                      Proceed to checkout
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

const mapStateToProps = state => {
  return {
    items: state.cartReducer.items
  };
};

export default connect(mapStateToProps)(ShoppingCart);
