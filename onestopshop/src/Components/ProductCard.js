import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ProductCard = ({ product }) => {
  let date = moment(product.date_added).fromNow();
  return (
    <div id="card-items" className="card">
      <div className="image">
        <img
          className="card-img-top img-fluid"
          id="card-image"
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h5 className="card-title">
            <span>{product.name}</span>
          </h5>
        </Link>
        <p className="card-text">{product.price} KWD</p>

      </div>
    </div>
  );
};

export default ProductCard;
