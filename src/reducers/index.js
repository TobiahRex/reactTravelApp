import { combineReducers } from 'redux';
import client from './clientReducer';
import who from './whoReducer';
import when from './whenReducer';

const rootReducer = combineReducers({
  client,
  who,
  when,
});
export default rootReducer;
