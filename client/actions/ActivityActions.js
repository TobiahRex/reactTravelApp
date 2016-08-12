import AppDispatcher from '../AppDispatcher';
import API from '../API';

const ActivityActions = {

  getActivities(clientId, city) {
    API.getActivities(clientId, city)
  },

}

export default ActivityActions;
