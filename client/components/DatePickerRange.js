import React, { Component } from 'react';
import moment from 'moment';
import RangePicker from 'react-daterange-picker';

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
      this.setState({value, states});
  }

  render() {
    return (
      <div>
        <RangePicker {...this.props} onSelect={this.handleSelect} value={this.state.value} />
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
      </div>
    );
  }
}
