import React, { Component } from 'react';
import API from '../API';
import ClientStore from '../stores/ClientStore';
import ClientActions from '../actions/ClientActions';
import Day from './Day';
import { Button, Panel, Container } from 'muicss/react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: null,
      email: '',
    };

    this._getItinerary = this._getItinerary.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }
  componentDidMount() {
    ClientStore.on('CHANGE', this._getItinerary);
  }
  _getItinerary() {
    this.setState({ client: ClientStore.getClient() });

  }
  submitEmail(){
    let clientId = this.state.client._id;
    let email = this.state.email;

    ClientActions.sendEmail(clientId, email);
  }

  render() {

    return(
      <div className="slide">
        <Row id='itinerary-row'>
          <Col md="12">
            <div className="itinerary">
              <div className="top-of-itinerary">
                <If condition={this.state.client}>
                <p className="city-in-itinerary">Itinerary for {this.state.client.where.city}</p>
                </If>
                <input id="email-input" type="email" className="form-control input-sm" placeholder="Email"
                value={this.state.email} onChange={ e => this.setState({ email: e.target.value })}/>
                <Button color='primary' id='button' className="form-control" size="small" onClick={this.submitEmail}>Send this to me!</Button>
                <br/>

              </div>
            <br/>
            <If condition={this.state.client}>
            {this.state.client.itinerary.map((day, index) => {
              return <Day key={index} day={day} client={this.state.client} num={index + 1} />
            })}
            <p className="flip-over">(Flip cards to view full itinerary)</p>

            </If>
            </div>

          </Col>
        </Row>

      </div>
    )
  }
}
