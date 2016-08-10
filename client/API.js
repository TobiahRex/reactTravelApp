import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'


const API = {
  getAllClientData() {
    get('/api/clients/')
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  deleteAllClients() {
    ajax({
      url: '/api/clients/',
      method: 'DELETE',
    })
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  createClient() {
    post('/api/clients/')
    .done(res => ServerActions.receivedNewClient(res))
    .fail(err => ServerActions.receivedError(err));
  },
  getClientData(clientId) {
    get(`/api/clients/${clientId}`)
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  addClientData(newClientData, clientId) {
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'PUT',
      data: newClientData,
    })
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => { console.log('err: ', err); ServerActions.receivedError(err)});
  },
  deleteClient(clientId) {
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'DELETE',
    });
  }
}

export default API
