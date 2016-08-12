import moment from 'moment';
import React, { Component } from 'react';
import RangePicker from 'react-daterange-picker';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';

let dates = [];

export default class DatePickerRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      states: null,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(value, states) {
    this.setState({value, states});
  }

  submitDate() {
    let client = ClientStore.getClient();
    let whenObj = {
      when: {
        start: this.state.value.start,
        end: this.state.value.end,
        days: value.end.diff(value.start, 'days'),
      }
    }
    console.log('whenObj: ', whenObj);

  }

  render() {
    return (
      <div className='col-xs-11'>
        <RangePicker {...this.props}
          onSelect={this.handleSelect}
          value={this.state.value} />
        <div>
          <input type="text"
            value={this.state.value ? this.state.value.start.format('LL') : ""}
            readOnly={true}
            placeholder="Start date"/>
          <input type="text"
            value={this.state.value ? this.state.value.end.format('LL') : ""}
            readOnly={true}
            placeholder="End date" />
        </div>
        <button className="btn btn-sm btn-default" onClick={this.submitDate}>Submit</button>
      </div>
    );
  }
}
