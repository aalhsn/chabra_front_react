import React, { Component } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

// Components
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

/**
 * maybe useState?
 */
class ProductsList extends Component {
  state = {
    query: ""
  };

  setQeury = query => this.setState({ query });

  filterProducts = () => {
    const query = this.state.query.toLowerCase();
    return this.props.products.filter(product => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query)
      );
    });
  };

  render() {
    const productCards = this.filterProducts().map(product => (
      <ProductCard key={product.id} product={product} />
    ));

    return (
      <div className="authors">
        <h3 className="mt-5">
          Chabra <FontAwesomeIcon icon={faShoppingBasket} /> جبرة
        </h3>
        <SearchBar onChange={this.setQeury} />
        <div className="row">{productCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.rootProducts.products
  };
};

export default connect(mapStateToProps)(ProductsList);
