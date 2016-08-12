import $ from 'jquery';
import moment from 'moment';
import {} from 'moment-range';
import timekeeper from 'timekeeper';

import React, { Component } from 'react';
import DatePickerRange from './DatePickerRange.js';
import ClientActions from '../actions/ClientActions';


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

    this.handleSelect = this.handleSelect.bind(this);

    this.submitDate = this.submitDate.bind(this);
  }

  handleSelect(range, states) {
    console.log('selected!');
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    });

  }

  submitDate() {
    $('input').each(function() {
      dates.push($(this).val());
    })
    var start = moment(dates[0]);
    var end = moment(dates[1]);
    let difference = end.diff(start, 'days');
    console.log('difference:', difference);
    return false;

    ClientActions.addClientData({
      when: {
        start: dates[0],
        end: dates[1],
        days: difference
      }
    }, this.state.id);

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
            <button className="btn btn-sm btn-default"  onClick={this.submitDate}>Submit</button>


            <footer className="questionnaire-footer">
              <a href="#questionnaire/3" onClick={this.nextPage}>
              <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
              </a>
            </footer>




        </div>
       </div>
    )
  }
}
