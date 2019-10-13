import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <Redirect to="/welcome" />
        </Switch>
      </div>
    );
  }
}
export default App;
