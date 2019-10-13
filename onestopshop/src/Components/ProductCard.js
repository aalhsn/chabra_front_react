import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class ProductCard extends Component {
  
  render() {
    const product = this.props.product;
    const date = moment(product.date_added).fromNow()
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/products/${product.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={product.img}
              alt={product.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{product.name}</span>
            </h5>
            <small className="card-text">Imported from {product.origin}</small>
            <br></br>
            <small className="card-text">Added to store {date}</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;