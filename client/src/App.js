import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import LandingPage from './components/Routes/LandingPage';
import HomePage from "./components/Routes/HomePage"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    return (
      <Router>

        <div className="App">

          <Switch>

            <Route
              exact
              path="/"
              render={() => (
                <LandingPage
                />
              )}
            />

            <Route
              exact
              path="/homepage"
              render={() => (
                <HomePage
                />
              )}
            />

          </Switch>

        </div>

      </Router>

    );
  }
}

export default App;
