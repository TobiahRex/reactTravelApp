import { combineReducers } from 'redux';
import client from './clientReducer';
import who from './whoReducer';

const rootReducer = combineReducers({
  client,
  who,
});
export default rootReducer;
