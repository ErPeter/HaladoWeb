import { combineReducers } from 'redux';
import cathcReducer from './cathcReducer';

export default combineReducers({
    catches: cathcReducer;
})