import React, { Component } from "react";
import { connect } from "react-redux";

//Component
import Loading from "./Loading";
import { Link } from "react-router-dom";

import { fetchProductDetail, addItem } from "../redux/actions";

//Consider memoizing later

class ProductDetail extends Component {
  state = {
    quantity: 0
  };

  async componentDidMount() {
    const productID = this.props.match.params.productID;
    if (!this.props.product) {
      await this.props.fetchProductDetail(productID);
    }
  }

  checkStock = () => {
    if (this.props.product.stock !== 0) {
      return (
        <>
          <button
            onClick={() => this.state.quantity > 0 && this.changeQuantity(-1)}
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
            onClick={() => this.state.quantity !== 0 && this.handleClick()}
          >
            Add to cart
          </button>
        </>
      );
    } else {
      return <h3 className="text-muted ml-4">Out of Stock</h3>;
    }
  };

  limited = () => {
    if (this.props.product.stock < 10 && this.props.product.stock > 0) {
      return (
        <>
          <h4 className="text-danger">
            {this.props.product.stock} items left!
          </h4>
        </>
      );
    }
  };

  handleClick = () => {
    const newItem = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity,
      img: this.props.product.img
    };
    this.props.addItem(newItem);
    this.setState({ quantity: 0 });
  };

  changeQuantity = number => {
    if (this.state.quantity >= 0) {
      if (
        this.props.products.find(
          product => product.id === this.props.product.id
        )
      ) {
        let quantityInCart = this.props.products.find(
          product => product.id === this.props.product.id
        ).quantity;
        if (
          quantityInCart + number + this.state.quantity >
          this.props.product.stock
        ) {
          return alert("Exceeded stock!");
        } else {
          const newQuantity = this.state.quantity + number;
          this.setState({ quantity: newQuantity });
        }
      } else if (number + this.state.quantity > this.props.product.stock) {
        return alert("Exceeded stock!");
      }
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };

  render() {
    if (!this.props.product) {
      return <Loading />;
    } else {
      const product = this.props.product;
      return (
        <>
          <section className="single-section"></section>
          <div id="detail-page" className="row">
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
              {this.limited()}
              <p className="product-desc">{product.description}</p>

              <div className="add">
                {this.checkStock()}
                <Link to="/cart">
                  <button id="btn-basket" className="btn btn-danger">
                    Shopping Basket
                  </button>
                </Link>
                <Link to="/">
                  <button id="btn-cont" className="btn btn-info">
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

const mapStateToProps = (state, ownProps) => {
  const productID = ownProps.match.params.productID;
  return {
    product: state.rootProduct.cache[productID],
    products: state.cartReducer.products
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
