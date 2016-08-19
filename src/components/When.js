import $ from 'jquery';
import moment from 'moment';
import {} from 'moment-range';
import timekeeper from 'timekeeper';
import { Button, Panel, Container, Row, Col } from 'muicss/react';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      value: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  render() {
    return (
      <div className="slide">
        <div className="when-title">
          <h5 className="when-title mui--text-display2">WHEN are you going?</h5>
        </div>
        <Row id="when-row">
          <Col md="10">

            <DatePickerRange
              firstOfWeek={1}
              numberOfCalendars={1}
              selectionType="range"
              minimumDate={new Date()}
              stateDefinitions={stateDefinitions}
              defaultState="available"
              showLegend={false}
              value={this.state.value} />

          </Col>
          <Col md="2">
            <div className="when-arrow mui--text-right">
              <a href="#questionnaire/3">
                <Button variant="fab" color="primary">
                  <i className="fa fa-arrow-right" />
                </Button>
              </a>
            </div>
          </Col>

        </Row>
      </div>
    );
  }
}
