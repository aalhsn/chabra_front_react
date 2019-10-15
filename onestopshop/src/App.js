import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import Loading from "../src/Components/Loading";
import ProductsList from "../src/Components/ProductsList";
import ProductDetail from "../src/Components/ProductDetail";
import NavBar from "./Components/Navigation/NavBar";

import { connect } from "react-redux";
import ShoppingCart from "./Components/ShoppingCart";

function App({ loading }) {
  const getView = () => {
    if (loading) {
      return (
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/products/:productID" component={ProductDetail} />
          <Route path="/cart/" component={ShoppingCart} />
          <Route path="/products/" component={ProductsList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <Redirect exact from="/" to="/products" />
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <NavBar />

      <div className="row">

        <div className="col-2">{/* <Sidebar /> */}</div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.rootProducts.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));
