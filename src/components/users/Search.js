import React, {Component} from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  // If you don't use the this keyword then you then onSubmit will return undefined as the scope of this does not pertain to the Component but to the function itself (i think)
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ""});
    }
    // This is what you send up to the app.js to keep things centralized
  };

  onChange = (e) => {
    // Using brackets allows you to access the key, in this case name, as oppsed to changing the value "text"
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    // Destructure showclear and clearusers so you don't have to keep on typing props.whatever
    const {showClear, clearUsers} = this.props;
    return (
      <div>
        {/* When we have a form we usually want to attach a state to the  input */}
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
