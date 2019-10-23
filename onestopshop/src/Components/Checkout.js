import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { checkout, fetchProductDetail, fetchProducts } from "../redux/actions";
import ShoppingCard from "./ShoppingCard";

class Checkout extends Component {
  state = {

    area: "",
    street: "",
    block: 0,
    optional: "",

    total: 0,
    address:""
  };

  totalPrice = () => {
    let total = 0;
    this.props.products.forEach(item => {
      total = total + parseFloat(item.price) * parseInt(item.quantity);
    });
    return total.toFixed(3);
  };

 


  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addressState = () => {
    let newOrders ={}
    if(this.state.address === ""){
      newOrders = {
        baskets: this.props.products,
        address: {
          area: this.state.area,
          street: this.state.street,
          block: this.state.block,
          optional: this.state.optional,
        }
      } 

    } else {

      newOrders = {
        baskets: this.props.products,
        address: {area: this.state.address}
      } 

    }
    return newOrders
  }


  handleClick = async () => {
    console.log(this.addressState())
    await this.props.checkout(this.addressState());
    this.props.fetchProducts();
    this.props.products.forEach(product =>
      this.props.fetchProductDetail(product.id)
    );
  };

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    const getOrderItems = this.props.products.map(item => (
      <ShoppingCard key={item.name} orderItem={item} />
    ));

    const userAdresses = this.props.profile.addresses;
        let Adresses = [];
        if (userAdresses) {

          Adresses = userAdresses.map(adress => (
       
              <option>{`${adress.area} ${adress.block} ${adress.street}`}</option>
              
           

          ));
        }

    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading mt-5">Order Summary</h1>
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
                    <td>
                 <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select name="address" onChange={this.changeHandler} class="form-control" id="exampleFormControlSelect1">
                    <option>Previous addresses</option>
                    {Adresses}
                    </select>
                  </div>
                    </td>
                      <td>Shipping Address</td>
                      <td>
                        <form>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Area</label>
                            <input
                              type="text"
                              name="area"
                              className="form-control"
                              onChange={this.changeHandler}
                              placeholder="Enter area name"
                            />
                            <small className="form-text text-muted">Delivery fees varies depending on area location</small>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Block</label>
                            <input
                              type="number"
                              name="block"
                              onChange={this.changeHandler}
                              className="form-control"
                              placeholder="Enter block number" />

                            <small className="form-text text-muted">Delivery fees varies depending on area location</small>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Street Address</label>
                            <input
                              type="text"
                              name="street"
                              onChange={this.changeHandler}
                              className="form-control"
                              placeholder="Enter street name or number" />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Optional</label>
                            <input
                              type="text"
                              name="optional"
                              onChange={this.changeHandler}
                              className="form-control" />
                            <small className="form-text text-muted">Avenue number or name/extra information</small>
                          </div>
                        </form>
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
    checkout: products => dispatch(checkout(products)),
    fetchProductDetail: productID => dispatch(fetchProductDetail(productID)),
    fetchProducts: () => dispatch(fetchProducts())
  };
};

const mapStateToProps = state => {
  return {
    orders: state.cartReducer.orders,
    products: state.cartReducer.products,
    orignals: state.rootProducts.products,
    user: state.authReducer.user,
    profile:state.authReducer.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
