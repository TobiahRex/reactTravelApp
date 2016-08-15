import $ from 'jquery';
import moment from 'moment';
import {} from 'moment-range';
import timekeeper from 'timekeeper';
import { Button, Panel, Container, Row, Col } from 'muicss/react';

import React, { Component } from 'react';
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
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    console.log('hello');
  }

  render() {

    return(
      <div className="slide">
        <div className="when-title">
          <h5 className='when-title mui--text-display2'>WHEN are you going?</h5>
        </div>
        <Row id='when-row'>
          <Col md="7" md-offset='3'>

            <DatePickerRange
              firstOfWeek={1}
              numberOfCalendars={1}
              selectionType='range'
              minimumDate={new Date()}
              stateDefinitions={stateDefinitions}
              defaultState="available"
              showLegend={false}
              value={this.state.value}
              onSelect={this.handleSelect}/>

          </Col>
          <Col md="2">
            <div className="intro-arrow mui--text-right">
              <a href="#questionnaire/3" onClick={this.nextPage}>
                <Button variant="fab" color="primary">
                  <i className="fa fa-arrow-right"></i>
                </Button>
              </a>
            </div>
          </Col>

        </Row>
      </div>
    )
  }
}


// <div className="slide">
//   <div>
//     <h1>When?</h1>
//
//     <DatePickerRange
//       firstOfWeek={1}
//       numberOfCalendars={1}
//       selectionType='range'
//       minimumDate={new Date()}
//       stateDefinitions={stateDefinitions}
//       defaultState="available"
//       showLegend={false}
//       value={this.state.value}
//       onSelect={this.handleSelect}/>
//
//   </div>
//   <div className="col-xs-1 col-xs-offset-1 when-arrow">
//   <a href="#questionnaire/3" onClick={this.nextPage}>
//   <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
//   </a>
//   </div>
// </div>
