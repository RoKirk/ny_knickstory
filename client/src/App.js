import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import LandingPage from './components/Routes/LandingPage';
import HomePage from "./components/Routes/HomePage"
import UserLogin from "./components/Routes/UserLogin"
import Team from "./components/Routes/Team";
import Players from "./components/Routes/Players"
import Player from "./components/Routes/Player"
import PostEdit from "./components/Routes/PostEdit"
import PhotoGallery from "./components/Routes/PhotoGallery"

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

            <Route
              exact
              path="/user_login"
              render={() => (
                <UserLogin
                />
              )}
            />

            <Route
              exact
              path="/team"
              render={() => (
                <Team
                />
              )}
            />

            <Route
              exact
              path="/players"
              render={() => (
                <Players
                  
                />
              )}
            />

            <Route
              exact
              path="/player"
              render={() => (
                <Player

                />
              )}
            />

            <Route
              exact
              path="/post_edit"
              render={() => (
                <PostEdit
                />
              )}
            />

            <Route
              exact
              path="/photo_gallery"
              render={() => (
                <PhotoGallery
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
