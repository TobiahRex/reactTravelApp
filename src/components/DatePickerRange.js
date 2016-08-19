import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RangePicker from 'react-daterange-picker';
import { Button, Panel, Container, Row, Col, Form, Input } from 'muicss/react';
import * as txClientActions from '../actions/txClientActions';

class DatePickerRange extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { value: '' };
    this.handleSelect = this.handleSelect.bind(this);
    this.submitDate = this.submitDate.bind(this);
  }

  handleSelect(value) {
    this.setState({ value });
  }

  submitDate(event) {
    event.preventDefault();
    const client = this.props.client;

    const whenObj = {
      when: {
        start: this.state.value.start.format('LL'),
        end: this.state.value.end.format('LL'),
        days: this.state.value.end.diff(this.state.value.start, 'days'),
      },
    };
    this.props.actions.addClientData(whenObj, client._id);
  }

  render() {
    return (
      <div>
        <RangePicker
          {...this.props}
          onSelect={this.handleSelect}
          value={this.state.value} />

        <div className="form-group chosen-dates">
          <Form inline={true}>

            <Input type="text"
              id="start-date"
              value={this.state.value ? this.state.value.start.format('LL') : ''}
              readOnly="true"
              placeholder="Start date"
              className="date-inputs" />
            <Input type="text"
              id="end-date"
              value={this.state.value ? this.state.value.end.format('LL') : ''}
              readOnly="true"
              placeholder="End date"
              className="date-inputs" />

            <label htmlFor="button" />
            <Button
              color="primary"
              id="button"
              onClick={this.submitDate}>Submit</Button>

          </Form>
        </div>
      </div>
    );
  }
}

DatePickerRange.propTypes = {
  client: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(txClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerRange);
