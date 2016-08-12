import $ from 'jquery';
import moment from 'moment';
import {} from 'moment-range';
import timekeeper from 'timekeeper';

import React, { Component } from 'react';
import DatePickerRange from './DatePickerRange.js';

let dates = [];

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

  render() {

    return(
      <div className="slide">
        <div>
          <h1>When?</h1>

          <DatePickerRange
            firstOfWeek={1}
            numberOfCalendars={2}
            selectionType='range'
            minimumDate={new Date()}
            stateDefinitions={stateDefinitions}
            defaultState="available"
            showLegend={false}
            value={this.state.value}
            onSelect={this.handleSelect}/>

          <div className="col-xs-1 questionnaire-arrow">
            <a href="#questionnaire/3" onClick={this.nextPage}>
              <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
