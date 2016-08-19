import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as ClientActions from '../actions/ClientActions';
import { Panel, Container, Row, Col, Form, Input, Button } from 'muicss/react';

class Where extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.showItinerary = this.showItinerary.bind(this);
  }

  showItinerary() {
    const client = this.props.client;
    if (this.state.city === '') {
      swal({
        title: 'Whoa there!',
        text: 'If you want an itinerary, you\'re going to need to give us a destination.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#f7b8b8',
      });
    } else {
      this.props.actions.addClientData({ where: { city: this.state.city } }, client._id);
      this.props.actions.getItinerary(client._id, this.state.city);
    }
  }

  render() {
    return (
      <div className="slide">
        <div>
          <h5 className="where-title mui--text-display2">WHERE are you going?</h5>
        </div>
        <Row id="where-row">

          <Col md="10">
            <Col md="1" md-offset="3">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </Col>
            <Col md="6">
              <Input
                id="where-input"
                hint="San Francisco"
                className="form-control"
                type="text" placeholder="City"
                onChange={e => this.setState({ city: e.target.value })} />
            </Col>
          </Col>


          <Col md="2">
            <div className="mui--text-right">
              <a href="#questionnaire/4" onClick={this.showItinerary}>
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

Where.propTypes = {
  client: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Where);
