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
    console.log('clientId: ', clientId, 'newClientData: ', newClientData);
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

  getBreakfast(city) {
    get(`/api/yelp/breakfast/${city}`)
      .done(response => response.json())
      .done(data => {
        RestaurantActions.getBreakfast(data.businesses)
        // API.addClientData(data.businesses)
        // this.addClientData(data.businesses)
      })
      .fail(err => console.log('err:', err))
  },

  getLunch(city) {
    get(`/api/yelp/lunch/${city}`)
      .done(response => response.json())
      .done(data => {
        RestaurantActions.getLunch(data.businesses);
        // API.addClientData(data.businesses)
        // this.addClientData(data.businesses)
      })
      .fail(err => console.log('err:', err))
  },

  getDinner(city) {
    get(`/api/yelp/dinner/${city}`)
      .done(response => response.json())
      .done(data => {
        RestaurantActions.getDinner(data.businesses);
        // API.addClientData(data.businesses);
        // this.addClientData(data.businesses);
      })
      .fail(err => console.log('err:', err))
  },

  getActivities(city) {
    get(`/api/yelp/activities/${city}`)
      .done(response => response.json())
      .done(data => {
        ActivityActions.getActivities(data.businesses)
        // API.addClientData(data.businesses)
        // this.addClientData(data.businesses)
      })
      .fail(err => console.log('err:', err))
  },

}

export default API
