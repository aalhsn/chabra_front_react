import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { fetchProducts } from "../redux/actions";

class ProductsList extends Component {
  state = {
    query: ""
  };

  setQeury = query => this.setState({ query });

  filterProducts = () => {
    const query = this.state.query.toLowerCase();
    return this.props.products.filter(product => {
      return product.name.toLowerCase().includes(query);
    });
  };

  render() {
    const productCards = this.filterProducts().map(product => (
      <ProductCard key={product.id} product={product} />
    ));

    return (
      <div className="products-list">
        <SearchBar onChange={this.setQeury} />
        <div className="row" id="card-row">
          {productCards}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

const mapStateToProps = state => {
  return {
    products: state.rootProducts.products
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
