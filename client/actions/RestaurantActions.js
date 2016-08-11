import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import API from '../API';

const RestaurantActions = {
  getYelp(clientId, city) {
    API.getYelp(clientId, city);
  }
}

export default RestaurantActions;
