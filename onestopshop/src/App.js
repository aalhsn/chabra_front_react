import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Components
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import Profile from "./Components/Profile";
import Loading from "./Components/Loading";
import ProductsList from "./Components/ProductsList";
import ProductDetail from "./Components/ProductDetail";
import NavBar from "./Components/Navigation/NavBar";
import ShoppingCart from "./Components/ShoppingCart";
import Checkout from "./Components/Checkout";
import OrderDetail from "./Components/OrderHistoryDetail";

function App({ loading }) {
  const getView = () => {
    if (loading) return <Loading />;
    return (
      <Switch>
        <Route exact path="/products/:productID" component={ProductDetail} />
        <Route path="/cart/" component={ShoppingCart} />
        <Route path="/products/" component={ProductsList} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={RegistrationForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order-details" component={OrderDetail} />
        <Redirect exact from="/" to="/products" />
      </Switch>
    );
  };
  return (
    <div id="app" className="container">
      <NavBar />
      <div className="col-12">{getView()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.rootProducts.loading
  };
};

export default withRouter(connect(mapStateToProps)(App));
