import { combineReducers } from 'redux';
import catchReducer from './catchReducer';

export default combineReducers({
  catches: catchReducer,
});
