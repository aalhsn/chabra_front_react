import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { fetchProducts } from "../redux/actions";

class ProductsList extends Component {
  state = {
    query: "",
    category: this.props.products
  };

  setQeury = query => this.setState({ query });
  setCategory = category => this.setState({ category });

  filterProducts = () => {
    const query = this.state.query.toLowerCase();
    return this.state.category.filter(product => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query)
      );
    });
  };

  handleClick = () => {
    let newCategory = this.props.products;
    this.setState({ category: newCategory });
    console.log("ALLLL", newCategory);
  };

  handleFruit = () => {
    let newCategory = this.props.products.filter(product => {
      return product.category === "Fruit";
    });
    this.setState({ category: newCategory });
    console.log("FRUITS:", newCategory);
  };

  handleVegetable = () => {
    let newCategory = this.props.products.filter(product => {
      return product.category === "Vegetable";
    });
    this.setState({ category: newCategory });
    console.log("VEGGIE:", newCategory);
  };

  render() {
    const productCards = this.filterProducts().map(product => (
      <ProductCard key={product.id} product={product} />
    ));

    return (
      <div className="products-list">
        <SearchBar onChange={this.setQeury} />
        <div className="row justify-content-center">
          <button
            className="btn ml-2 col-1 rounded-pill"
            style={{ backgroundColor: "#e83e8c", color: "white" }}
            onClick={() => this.handleVegetable()}
          >
            Vegetables
          </button>
          <button
            className="btn ml-2 col-1 rounded-pill"
            style={{ backgroundColor: "#e83e8c", color: "white" }}
            onClick={() => this.handleFruit()}
          >
            Fruits
          </button>
          <button
            className="btn ml-2 col-1 rounded-pill btn-outline-secondary"
            onClick={() => this.handleClick()}
          >
            All
          </button>
        </div>
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
