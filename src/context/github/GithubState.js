// This will include all the state and any actions that relate to github such as searchUsers etc
import React, { useReducer } from 'react';
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './GIthubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

const GithubState = props => {
  const initialState = {
    users:[],
    user:{},
    repos:[],
    loading:false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  // Search Github users.  With arrow functions you add the async before the arrow
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);
    // This will set loading to false and set the users as the users from the Ghub api
    // Because response from the api cannot just be res.data as there are things like pagination etc.  The data has to be returned as res.data.items
    dispatch({
      type : SEARCH_USERS,
      payload : res.data.items
    })
  };

  // Get USer

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING})
  }

  return <GithubContext.Provider 
  value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers
  }}
  >
{props.children}
</GithubContext.Provider>
}

export default GithubState;