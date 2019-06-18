import React, { Component } from "react";
import Shore from "./shore.jpg";
import Home from "./components/Home";
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
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default App;
