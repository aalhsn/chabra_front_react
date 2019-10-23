import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';

class ProductCard extends Component {
  state = {
    quantity: 0
  };

  ShowCounter = () => {
    if (this.props.product.stock !== 0) {
      return (
        <>
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
            className="btn btn-success mt-2"
            onClick={() => this.state.quantity !== 0 && this.handleClick()}
          >
            Add to cart{" "}
          </button>
          {this.limited()}
        </>
      );
    } else {
      return (
        <>
          <button className="btn btn-secondary mt-2 rounded-pill" disabled>
            Out of Stock
          </button>
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
  limited = () => {
    if (this.props.product.stock < 10 && this.props.product.stock > 0) {
      return (
        <>
          <h6 className="text-danger mt-3">
            {this.props.product.stock} items left!
          </h6>
        </>
      );
    }
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
    const product = this.props.product;

    const item = this.props.products.find(item=> item.id === product.id)
    let date = moment(product.date_added).fromNow();
    let counter = `${item && item.quantity} in basket`
    return (
      <div id="card-items" className="card">
        <span className="badge badge-success" style={{height:25, fontSize:"1.1em"}}>Item was added {date}</span>
        <Link to={`/products/${product.id}`}>
        <NotificationBadge id="bage" className="badge badge-pill badge-success" style = {{backgroundColor: "yellow" ,transformY:200, color:"black", marginRight:95}} count={item && item.quantity} label={counter} effect={Effect.ROTATE_X}/>
  
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
          <Link id="card-name" to={`/products/${product.id}`}>
            <h5 className="card-title">
              <span>{product.name}</span>
            </h5>
          </Link>
          <p className="card-text" style={{ marginBottom: 0 }}>
            {product.price} KWD
          </p>
          <small className="card-text">
            <strong>{product.origin}</strong>
          </small>
          <br />
          {this.ShowCounter()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cartReducer.products
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

