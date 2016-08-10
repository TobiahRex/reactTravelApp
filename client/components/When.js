import React, { Component } from 'react';

import moment from 'moment';
import {} from 'moment-range';
import timekeeper from 'timekeeper';
import DatePickerRange from './DatePickerRange.js';


const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable',
  },
};


export default class When extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    });
  }


  render() {

    return(
      <div className="slide">
        <div className="when">
          <h1>When?</h1>
          <DatePickerRange
            firstOfWeek={1}
            numberOfCalendars={2}
            selectionType='range'
            minimumDate={new Date()}
            stateDefinitions={stateDefinitions}
            defaultState="available"
            showLegend={true}
            value={this.state.value}
            onSelect={this.handleSelect}
          />
        </div>
       </div>
    )
  }
}
