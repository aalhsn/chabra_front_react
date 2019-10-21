import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCard from "./ShoppingCard";

class ShoppingCart extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.products.forEach(item => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(3);
  };
  render() {
    const getOrderItem = this.props.products.map(item => (
      <ShoppingCard key={item.name} orderItem={item} />
    ));

    return (
      <>
        <section id="overlay" className="single-section">
          <h1 id="my-cart">My Cart</h1>
        </section>

        <div id="table" className="container-fluid mb-4">
          <div>
            <div>
              <div>
                <table className="table table-striped">
                  <thead id="name-row">
                    <tr id="space-row">
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
                    </tr>
                  </tbody>
                </table>

                <table>
                  <tbody>
                    <tr>
                      <td id="total">
                        <strong id="total-text">Total</strong>
                        <strong id="total-price">{this.totalPrice()} KWD</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/home">
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
    products: state.cartReducer.products
  };
};

export default connect(mapStateToProps)(ShoppingCart);
