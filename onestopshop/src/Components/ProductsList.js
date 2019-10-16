import React, { Component } from "react";
import { connect } from "react-redux";


// Components
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

class ProductsList extends Component {
  state = {
    query: ""
  };

  setQeury = query => this.setState({ query });

  filterProducts = () => {
    const query = this.state.query.toLowerCase();
    return this.props.products.filter(product => {
      return product.name.toLowerCase().includes(query)
    });
  };

  render() {
    const productCards = this.filterProducts().map(product => (
      <ProductCard key={product.id} product={product} />
    ));

    return (
      <div>
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