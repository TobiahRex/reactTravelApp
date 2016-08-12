import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import API from '../API';

const ActivityActions = {


  getActivities(clientId, city) {
    API.getActivities(clientId, city)
  },
}

export default ActivityActions;
