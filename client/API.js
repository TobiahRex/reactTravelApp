import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'
import RestaurantActions from './actions/RestaurantActions';
import ActivityActions from './actions/ActivityActions';


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
    .done(res => { ServerActions.receivedClientData(res) })
    .fail(err => ServerActions.receivedError(err));
  },
  addClientData(newClientData, clientId) {
    console.log('newClientData: ', newClientData, 'clientId: ', clientId);
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'PUT',
      data: newClientData,
    })
    .done(res => ServerActions.receivedClientData(res[0]))
    .fail(err => ServerActions.receivedError(err));
  },
  deleteClient(clientId) {
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'DELETE',
    })
    .done()
    .fail(err => ServerActions.receivedError(err));
  },

  getItinerary(clientId, city) {
    post(`/api/yelp/itinerary/${clientId}`, {
      location: city
    })
    .done(data => {
      console.log('data before being sent to serveractions:', data);
      ServerActions.receivedClientData(data);
    })
    .fail(err => ServerActions.receivedError(err))
  },

}

export default API
