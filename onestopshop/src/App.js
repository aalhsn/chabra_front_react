import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
// import Sidebar from "./Sidebar";
import Loading from "../src/Components/Loading";
import ProductsList from "../src/Components/ProductsList";
import { connect } from "react-redux";

function App({ loading }) {
  const getView = () => {
    if (loading) {
      return <div className="loading"><Loading /></div>
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/products" />
          
          <Route path="/products/" component={ProductsList} />
   
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          {/* <Sidebar /> */}
        </div>
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