import React, { Component } from "react";
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <hr />
          <Route name="Home" exact path="/" component={Home} />
          <Route name="Menu" path="/menu" component={Menu} />
          <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Routes;
