import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'


const API = {
  getClientData() {
    get('/api/users/')
    .done(res => ServerActions.receiveUserData)
    .fail(err => ServerActions.receiveError);
  }
  addClientData(newClientData) {
    post('/api/users', newClientData)
    .done(res => ServerActions.receiveUserData)
    .fail(err => ServerActions.receiveError);
  }
}

export default API
