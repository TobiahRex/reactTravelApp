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
    console.log('this.state.client: ', this.state.client);
  }
  submitEmail(){
    let clientId = this.state.client._id;
    let email = this.state.email;

    ClientActions.sendEmail(clientId, email);
  }

  render() {


    return(
      <div className="slide">
        <Row>
          <Col md="12">
            <div className="itinerary">Itinerary<br/>
            Enter your email so we can send you this itinerary!

            <input type="email" placeholder="Email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value })}/>
            <br/>
            <If condition={this.state.client}>
            {this.state.client.itinerary.map((day, index) => {
              return <Day key={index} day={day} />
            })}
            </If>
            </div>
          </Col>
        </Row>

      </div>
    )
  }
}
