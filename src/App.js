import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import User from "./components/users/User.js";
import About from "./components/pages/About";
import Home from './components/pages/Home'
import Alert from "./components/layout/Alert";
import NotFound from './components/pages/NotFound'
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import "./App.css";

const App = () => {

    // Destructure here

    return (
    <GithubState>
      <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert/>
            {/* /* Wrap all routes in a switch */}
            <Switch>
              <Route
                exact
                path='/'
                component = {Home}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                component = {User}
              />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
