import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

// A reducer is just a function
export default (state, action) => {
  switch(action.type){
    case SEARCH_USERS:
      return {
         ...state,
         users: action.payload,
         loading:false
      };
    case GET_USER:
      return{
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users:[],
        loading: false
      };
    case GET_REPOS:
      return{
        ...state,
        repos : action.payload,
        loading : false

      }
    case SET_LOADING:
      return {
        // This will copy what is in the state
        ...state,
        loading: true
      };
    default:
    return state;
  }
}