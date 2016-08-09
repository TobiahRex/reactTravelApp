import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

import AppDispatcher from '../AppDispatcher';

class ActivityStore extends EventEmitter {
  constructor(props) {
    super(props);
  }
}

export default new ActivityStore();
