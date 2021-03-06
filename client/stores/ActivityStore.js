import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

import AppDispatcher from '../AppDispatcher';

let _activities;

class ActivityStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_ACTIVITIES:
          _activities = action.activities;
          this.emit('ACTIVITIES');
          break;
      }
    })
  }

  getActivities() {
    return _activities;
  }
}

export default new ActivityStore();
