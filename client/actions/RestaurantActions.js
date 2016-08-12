import AppDispatcher from '../AppDispatcher';
import API from '../API';

const RestaurantActions = {
  getRestaurants(id, city) {
    API.getRestaurants(id, city);
  }
}

export default RestaurantActions;
