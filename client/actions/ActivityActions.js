import AppDispatcher from '../AppDispatcher';
import API from '../API';

const ActivityActions = {
  getActivities(id, city) {
    API.getActivities(id, city);
  }
}

export default ActivityActions;
