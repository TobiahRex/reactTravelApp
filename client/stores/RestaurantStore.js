import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

import AppDispatcher from '../AppDispatcher';

class RestaurantStore extends EventEmitter {
  constructor(props) {
    super(props);
  }
}

export default new RestaurantStore();
