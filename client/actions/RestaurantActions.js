import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import API from '../API';

const RestaurantActions = {

  getBreakfast(clientId, city) {
    API.getBreakfast(clientId, city);
  },

  getLunch(restaurants) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LUNCH,
      restaurants
    })
  },

  getDinner(restaurants) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_DINNER,
      restaurants
    })
  },

}

export default RestaurantActions;
