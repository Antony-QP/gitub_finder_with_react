import React, {Component} from "react";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/users/Users.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    // To change the state of the class you need to use setState method
    // This will change the loading state to true
    this.setState({loading: true});

    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    // This will set loading to false and set the users as the users from the Ghub api
    this.setState({users: res.data, loading: false});
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
