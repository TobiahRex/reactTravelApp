import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RangePicker from 'react-daterange-picker';
import { Button, Panel, Container, Row, Col, Form, Input } from 'muicss/react';
import * as txClientActions from '../actions/txClientActions';
import * as rxClientActions from '../actions/rxClientActions';
import * as whenActions from '../actions/whenActions';

class DatePickerRange extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { value: '' };

    this.submitDate = this.submitDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(value) {
    this.setState({ value });
    this.props.rxActions.submitDates(value);
    this.props.whenActions.submitDates(value);
  }


  submitDate(event) {
    event.preventDefault();
    this.props.txActions.addClientData(this.props.client, this.props.client._id);
  }

  render() {
    console.log('this.props: ', this.props);
    return (
      <div>
        <RangePicker
          {...this.props}
          onSelect={this.handleSelect}
          value={this.state.value}
          />

        <div className="form-group chosen-dates">
          <Form inline={true}>

            <Input
              type="text"
              id="start-date"
              value={this.props.when.value ? this.props.when.value.start.format('LL') : ''}
              readOnly="true"
              placeholder="Start date"
              className="date-inputs" />
            <Input
              type="text"
              id="end-date"
              value={this.props.when.value.end ? this.props.when.value.end.format('LL') : ''}
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
  client: PropTypes.object.isRequired,
  when: PropTypes.object.isRequired,
  whenActions: PropTypes.object.isRequired,
  rxActions: PropTypes.object.isRequired,
  txActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
  when: state.when,
});

const mapDispatchToProps = (dispatch) => ({
  whenActions: bindActionCreators(whenActions, dispatch),
  rxActions: bindActionCreators(rxClientActions, dispatch),
  txActions: bindActionCreators(txClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerRange);
