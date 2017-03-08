import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import GifsReducer from './GifsReducer';

export default combineReducers({ 
  user: UserReducer,
  gifs: GifsReducer
});


