import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import API from '../API';

const ActivityActions = {
  getActivities(activities) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ACTIVITIES,
      activities
    })
  },
}

export default ActivityActions;
