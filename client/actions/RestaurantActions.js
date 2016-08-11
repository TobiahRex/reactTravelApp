import AppDispatcher from '../AppDispatcher';
import API from '../API';

const RestaurantActions = {
  getRestaurants(clientId, city) {
    API.getRestaurants(clientId, city);
  }
}

export default RestaurantActions;
