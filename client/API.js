import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'
import RestaurantActions from './actions/RestaurantActions';
import ActivityActions from './actions/ActivityActions';


const API = {
  getClientData() {
    get('/api/users/')
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  addClientData(newClientData) {
    ajax({
      url: '/api/users',
      method: 'PUT',
      data: newClientData,
    })
    .done(res => ServerActions.receivedClientData(res))
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
