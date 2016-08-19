import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Panel, Container, Row, Col } from 'muicss/react';
import Day from './Day';
import ClientActions from '../actions/ClientActions';


class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.renderCards = this.renderCards.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  submitEmail() {
    const clientId = this.props.client._id;
    const email = this.state.email;

    this.props.actions.sendEmail(clientId, email);
  }

  renderCards(day, index) {
    return (
      <Day key={index} day={day} client={this.props.client} num={index + 1} />
    );
  }

  render() {
    const { client } = this.props;
    return (
      <div className="slide">
        <Row id="itinerary-row">
          <Col md="12">
            <div className="itinerary">
              <If condition={client}>
                <p className="city-in-itinerary">{client.where.city}</p>
              </If>
              Enter your email so we can send you this itinerary!
              <br />
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })} />
              <Button
                color="primary"
                id="button"
                className="form-control"
                size="large"
                onClick={this.submitEmail}>Send</Button>
              <br />
              <If condition={this.props.client}>
                {this.props.client.itinerary.map(this.renderCards)}
              </If>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Itinerary.propTypes = {
  actions: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
