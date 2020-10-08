import React, {Component} from "react";

export class Search extends Component {
  state = {
    text: "",
  };
  // If you don't use the this keyword then you then onSubmit will return undefined as the scope of this does not pertain to the Component but to the function itself (i think)
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => {
    // Using brackets allows you to access the key, in this case name, as oppsed to changing the value "text"
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
