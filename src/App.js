import React, {Component} from "react";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // Search Github users.  With arrow functions you add the async before the arrow
  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);
    // This will set loading to false and set the users as the users from the Ghub api
    // Because response from the api cannot just be res.data as there are things like pagination etc.  The data has to be returned as res.data.items
    this.setState({users: res.data.items, loading: false});
  };

  // clearUsers from state
  clearUsers = () => {
    this.setState({users: [], loading: false});
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}});

    setTimeout(() => this.setState({alert: null}), 5000);
  };

  render() {
    // Destructure here
    const {users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
