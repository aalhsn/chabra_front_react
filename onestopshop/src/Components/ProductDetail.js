import React, { Component } from "react";
import { connect } from "react-redux";

//Component
import Loading from "./Loading";
import { Link } from "react-router-dom";

import { fetchProductDetail, addItem } from "../redux/actions";


//Consider memoizing later

class ProductDetail extends Component {
  state = {
    quantity: 1
  };

  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.productID);
  }

  handleClick = () => {
    const newItem = {
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity
    };
    this.props.addItem(newItem);
  };

  changeQuantity = number => {
    if (this.state.quantity >= 0) {
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const product = this.props.product;
      return (
        <>
          <div className="col-lg-4 col-md-6 col-12 mt-5">
            <div className="image">
              <img
                className="card-img-top img-fluid border"
                src={product.img}
                alt={product.name}
              />
            </div>
            <div className="card-body border">
              <h5 className="card-title">
                <span>{product.name}</span>
              </h5>
              <p>
                {product.description}{" "}
                <span className="float-right">{product.price}KWD</span>
              </p>
              <small className="card-text">From farm to table!</small>
              <br />
              <div style={{ alignContent: "center" }}>
                <button
                  onClick={() =>
                    this.state.quantity > 0 && this.changeQuantity(-1)
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  value={this.state.quantity}
                  style={{ textAlign: "center" }}
                />
                <button onClick={() => this.changeQuantity(1)}>+</button>
              </div>
              <br />
              <button onClick={() => this.handleClick()}>Add to cart</button>
              <Link to="/cart">
                <button className="btn btn-success">Shopping Basket</button>
              </Link>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.rootProduct.product,
    loading: state.rootProduct.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetail: productID => dispatch(fetchProductDetail(productID)),
    addItem: product => dispatch(addItem(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
