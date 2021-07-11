import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../screens/Home/Home';
import User from '../screens/User/User';
import Shop from "../screens/Shop/Shop";
import Auth from '../screens/Auth/Auth';
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/auth" component={Auth} />
    </Router>
  </Provider>
);
export default Root;
