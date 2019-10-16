import React, { Component } from "react";
import { connect } from "react-redux";

//Component
import Loading from "./Loading";

//Actions
import { fetchProductDetail } from "../redux/actions";

//Consider memoizing later

class ProductDetail extends Component {
  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.productID);
  }

  handleClick = () => {
    alert(`${this.props.product.name} added to cart`);
  };

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const product = this.props.product;
      return (
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
            {product.active && (
              <button
                className="float-right"
                onClick={() => this.handleClick()}
              >
                ORDER NOW
              </button>
            )}
            {!product.active && (
              <p className="bg-warning">
                This product is currently out of stock.
              </p>
            )}
            <br />
          </div>
        </div>
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
    fetchProductDetail: productID => dispatch(fetchProductDetail(productID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
