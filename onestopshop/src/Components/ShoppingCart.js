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

        <div class="wrap cf">
          <div class="heading cf">
            <h1>My Cart</h1>
            <Link to="/home">
              <button className="btn btn-block btn-light">
                Continue Shopping
              </button>
            </Link>
          </div>
          <div class="cart">
            <ul class="cartWrap">
              <li class="items even">
                <div class="infoWrap">
                  <div class="cartSection">
                    <img
                      src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                      alt=""
                      class="itemImg"
                    />
                    <p class="itemNumber">#QUE-007544-002</p>
                    <h3>Item Name 1</h3>

                    <p>
                      {" "}
                      <input type="text" class="qty" placeholder="3" /> x $5.00
                    </p>

                    <p class="stockStatus"> In Stock</p>
                  </div>

                  <div class="prodTotal cartSection">
                    <p>$15.00</p>
                  </div>
                  <div class="cartSection removeWrap">
                    <a href="#" class="remove">
                      x
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="subtotal cf">
            <ul>
              <li class="totalRow">
                <span class="label">Subtotal</span>
                <span class="value">$35.00</span>
              </li>

              <li class="totalRow">
                <span class="label">Shipping</span>
                <span class="value">$5.00</span>
              </li>

              <li class="totalRow">
                <span class="label">Tax</span>
                <span class="value">$4.00</span>
              </li>
              <li class="totalRow final">
                <span class="label">Total</span>
                <span class="value">$44.00</span>
              </li>
              <li class="totalRow">
                <Link to="/checkout" params={{ total: this.totalPrice() }}>
                  <button className="btn continue">Proceed to checkout</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
