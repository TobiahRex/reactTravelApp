import moment from 'moment';
import React, { Component } from 'react';
import RangePicker from 'react-daterange-picker';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';
import { Button, Panel, Container, Row, Col, Form, Input } from 'muicss/react';

let dates = [];

export default class DatePickerRange extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleSelect = this.handleSelect.bind(this);
    this.submitDate = this.submitDate.bind(this);
  }

  handleSelect(value) {
    this.setState({value});
  }


  submitDate() {
    let client = ClientStore.getClient();

    let whenObj = {
      when: {
        start: this.state.value.start.format('LL'),
        end: this.state.value.end.format('LL'),
        days: this.state.value.end.diff(this.state.value.start, 'days'),
      }
    }
    ClientActions.addClientData(whenObj, client._id);
  }

  render() {
    return (
      <div>
        <RangePicker {...this.props}
          onSelect={this.handleSelect}
          value={this.state.value} />

        <div className='form-group chosen-dates'>
            <Form inline={true}>

            <Input type="text"
              id='start-date'

              value={this.state.value ? this.state.value.start.format('LL') : ''}
              readOnly={true}
              placeholder="Start date"
              className='form-control date-inputs'/>
            <Input type="text"
              id='end-date'
              value={this.state.value ? this.state.value.end.format('LL') : ''}
              readOnly={true}
              placeholder="End date"
              className='form-control date-inputs'/>
            <label htmlFor="button"> </label>

            <Button color='primary' id='button' className="form-control" onClick={this.submitDate}>Submit</Button>

          </Form>
        </div>
        <br/>
      </div>
    );
  }
}


// <div className='col-xs-7 col-xs-offset-3 row'>
//   <RangePicker {...this.props}
//     onSelect={this.handleSelect}
//     value={this.state.value} />
//   <div className="form-inline col-xs-offset-2">
//     <div className='form-group'>
//       <input type="text"
//         id='start-date'
//         value={this.state.value ? this.state.value.start.format('LL') : ''}
//         readOnly={true}
//         placeholder="Start date"
//         className='form-control'/>
//       <input type="text"
//         id='end-date'
//         value={this.state.value ? this.state.value.end.format('LL') : ''}
//         readOnly={true}
//         placeholder="End date"
//         className='form-control'/>
//       <label htmlFor="button"> </label>
//       </div>
//   </div>
//   <br/>
//   <div className="col-xs-10">
//     <button id='button' className="btn btn-primary btn-lg btn-block" onClick={this.submitDate}>Submit</button>
//   </div>
// </div>
