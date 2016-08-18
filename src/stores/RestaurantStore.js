import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

import AppDispatcher from '../AppDispatcher';

let _breakfast;
let _lunch;
let _dinner;

class RestaurantStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_BREAKFAST:
          _breakfast = action.restaurants;
          this.emit('BREAKFAST');
          break;
        case ActionTypes.RECEIVE_LUNCH:
          _lunch = action.restaurants;
          this.emit('LUNCH');
          break;
        case ActionTypes.RECEIVE_DINNER:
          _dinner = action.restaurants;
          this.emit('DINNER');
          break;
      }
    });
  }

  getBreakfast() {
    return _breakfast;
  }

  getLunch() {
    return _lunch;
  }

  getDinner() {
    return _dinner;
  }
}

export default new RestaurantStore();
