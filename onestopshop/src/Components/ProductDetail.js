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
      id: this.props.product.id,
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
          <section className="single-section"></section>
          <div className="row">
            <div className="col">
              <img
                className="detail-img"
                src={product.img}
                alt={product.name}
              />
            </div>
            <div id="details" className="col">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-price">{product.price} KWD</span>

              <p className="product-desc">{product.description}</p>

              <div className="add">
                <button
                  onClick={() =>
                    this.state.quantity > 0 && this.changeQuantity(-1)
                  }
                  id="add-btn"
                >
                  -
                </button>
                <input id="add-quan" type="text" value={this.state.quantity} />
                <button id="add-btn" onClick={() => this.changeQuantity(1)}>
                  +
                </button>

                <br />
                <button
                  id="btn-cart"
                  className="btn btn-success"
                  onClick={() => this.handleClick()}
                >
                  Add to cart
                </button>
                <Link to="/cart">
                  <button id="btn-basket" className="btn btn-danger">
                    Shopping Basket
                  </button>
                </Link>
                  <Link to="/home">
                    <button className="btn btn-block btn-light">
                      Continue Shopping
                    </button>
                  </Link>
              </div>
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
