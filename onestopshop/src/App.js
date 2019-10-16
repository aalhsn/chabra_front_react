import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Components
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import Profile from "./Components/Profile";
import Loading from "../src/Components/Loading";
import ProductsList from "../src/Components/ProductsList";
import ProductDetail from "../src/Components/ProductDetail";
import NavBar from "./Components/Navigation/NavBar";
import ShoppingCart from "./Components/ShoppingCart";


function App({ loading }) {
  const getView = () => {
    if (loading) return <Loading />
      return (
        <Switch>
          <Route exact path="/products/:productID" component={ProductDetail} />
          <Route path="/cart/" component={ShoppingCart} />
          <Route path="/products/" component={ProductsList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <Route path="/profile" component={Profile} />
          <Redirect exact from="/" to="/products" />
        </Switch>
      );
    }
  return (

    <div id="app" className="container">
    <NavBar/>
    <div classNAme="col-12">
        {getView()}
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
