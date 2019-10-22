import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

class ProductCard extends Component {
  state = {
    quantity: 0
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

  changeQuantity = number => {
    if (this.state.quantity >= 0) {
      if (
        this.props.productss.find(
          product => product.id === this.props.product.id
        )
      ) {
        let quantityInCart = this.props.productss.find(
          product => product.id === this.props.product.id
        ).quantity;
        if (
          quantityInCart + number + this.state.quantity >
          this.props.product.stock
        ) {
          alert("Exceeded stock!");
        } else {
          const newQuantity = this.state.quantity + number;
          this.setState({ quantity: newQuantity });
        }
      } else if (number + this.state.quantity > this.props.product.stock) {
        alert("Exceeded stock!");
      }
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };
  render() {
    const product = this.props.product;
    let date = moment(product.date_added).fromNow();
    return (
      <div id="card-items" className="card">
        <Link to={`/products/${product.id}`}>
          <div className="image">
            <img
              className="card-img-top img-fluid"
              id="card-image"
              src={product.img}
              alt={product.name}
            />
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <span>{product.name}</span>
          </h5>
          <p className="card-text">{product.price} KWD</p>
          <button
            onClick={() => this.state.quantity > 0 && this.changeQuantity(-1)}
            id="add-btn"
          >
            -
          </button>
          <input id="add-quan1" type="text" value={this.state.quantity} />
          <button id="add-btn" onClick={() => this.changeQuantity(1)}>
            +
          </button>

          <br />
          <button
            id="btn-cart"
            className={`btn btn-${
              this.props.product.stock === 0 ? "secondary mt-2" : "success mt-2"
            }`}
            onClick={() => this.state.quantity !== 0 && this.handleClick()}
          >
            {this.props.product.stock === 0 ? "Out of Stock" : "Add to cart"}
          </button>
          {this.limited()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productss: state.cartReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: product => dispatch(addItem(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
