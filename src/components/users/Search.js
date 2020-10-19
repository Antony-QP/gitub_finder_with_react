import React, {useState, useContext}from "react";
import PropTypes from "prop-types";
import GithubContext from '../../context/github/githubContext'

const Search = ({showClear, clearUsers, setAlert}) => {
  const githubContext = useContext(githubContext)
  // This is where is where state would be if it were a conditional component
 const [text, setText] = useState('')
  // If you don't use the this keyword then you then onSubmit will return undefined as the scope of this does not pertain to the Component but to the function itself (i think)
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
    // This is what you send up to the app.js to keep things centralized
  };

  const onChange = (e) => {
    // Using brackets allows you to access the key, in this case name, as oppsed to changing the value "text"
    // no more 'this.' Call the function setText and pass the value you want as the argument.
    setText(e.target.value);
  };


    // Destructure showclear and clearusers so you don't have to keep on typing props.whatever

    return (
      <div>
        {/* When we have a form we usually want to attach a state to the  input */}
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            // We don't need this.state.text anymore, just pass 'text'
            value={text}
            onChange={onChange}
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

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
