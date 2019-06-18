import React, { Component } from "react";
import Shore from "./shore.jpg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default App;
