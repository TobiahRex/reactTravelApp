import moment from 'moment';
import React, { Component } from 'react';
import RangePicker from 'react-daterange-picker';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';

export default class DatePickerRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      states:null
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(value, states) {
    console.log('value: ', value, 'diff: ', moment(value.end - value.start).format('LL'));
    this.setState({value, states});
  }

  submitDate() {
    let client = ClientStore.getClient();

    $('input').each(() => dates.push($(this).val()));

    let start = moment(dates[0]);
    let end = moment(dates[1]);
    let difference = end.diff(start, 'days');
    console.log('difference:', difference);
    return false;

    let whenObj = {
      when: {
        start: dates[0],
        end: dates[1],
        days: difference
      }
    }
    console.log('whenObj: ', whenObj);
    // ClientActions.addClientData({
    //
    // }, client._id);

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
