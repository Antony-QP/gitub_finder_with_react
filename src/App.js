import React, {Component} from "react";
import Navbar from "./components/layout/Navbar.js";
import "./App.css";

class App extends Component {
  render() {
    const numbers = [1, 2, 3];
    return (
      <div className='App'>
        <Navbar title={numbers} />
      </div>
    );
  }
}

export default App;
