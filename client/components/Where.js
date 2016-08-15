import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';
import { Panel, Container, Row, Col, Form, Input, Button } from 'muicss/react';

export default class Where extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.showItinerary = this.showItinerary.bind(this);
  }

  showItinerary() {
    let client = ClientStore.getClient();
    if(this.state.city === '') {
      swal({
        title: 'Whoa there!',
        text: 'If you want an itinerary, you\'re going to need to give us a destination.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#f7b8b8',
      });
    } else {
      ClientActions.addClientData({ where: { city: this.state.city }}, client._id);
      ClientActions.getItinerary(client._id, this.state.city);
    }
  }

  render() {
    return(
      <div className="slide">
        <div>
          <h5 className='where-title mui--text-display2'>WHERE are you going?</h5>
        </div>
        <Row id='where-row'>

          <Col md='10'>
            <Col md='1' md-offset='3'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </Col>
            <Col md='6'>
              <Input
                id='where-input'
                hint='San Francisco'
                className='form-control'
                type="text" placeholder="City"
                onChange={ e => this.setState({ city: e.target.value })}/>
            </Col>
          </Col>


          <Col md="2">
            <div className="mui--text-right">
              <a href="#questionnaire/4" onClick={this.showItinerary}>
                <Button  variant="fab" color="primary">
                  <i className="fa fa-arrow-right"></i>
                </Button>
              </a>
            </div>
          </Col>

        </Row>

      </div>
    )
  }
}

//
// <div className="slide">
//   <div className="where-title">
//     <h1>Where are you going?</h1>
//   </div>
//   <div className="where-content col-xs-11">
//     <div className="city-input col-xs-6 col-xs-offset-3 text-center">
//       <i className="fa fa-map-marker" aria-hidden="true"></i>
//       <input className='form-control where-city-input' type="text" placeholder="City"
//         onChange={ e => this.setState({ city: e.target.value })}/>
//     </div>
//     <div className="col-xs-12 where-page-break">
//     </div>
//     <div className="where-submit col-xs-4 col-xs-offset-4">
//       <button className="btn btn-lg btn-success btn-block" onClick={this.showItinerary}>Show me my itinerary!</button>
//     </div>
//   </div>
//   <div className="col-xs-1 where-arrow">
//   <a href="#questionnaire/4" onClick={this.showItinerary}>
//   <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
//   </a>
//   </div>
//
// </div>
