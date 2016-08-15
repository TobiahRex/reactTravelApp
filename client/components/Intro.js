import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions.js'
import { Button, Panel, Container, Col, Row } from 'muicss/react';
// import Row from 'muicss/lib/react/row';
// import Col from 'muicss/lib/react/col';
// import Panel from 'muicss/lib/react/panel';


export default class Intro extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    let newClient = {
      who: {
        male: 0,
        female: 0,
        kids: 0,
      },
      when: {
        start: '',
        end: '',
      },
      where: {
        city: '',
        state: '',
      },
      what: {
        activities: [],
        restaurants: [],
      },
      email: '',
    }
    ClientActions.createClient(newClient);
  }

  render() {
    return(
      <div className="slide">
        <Row className='intro-row'>
          <Col md='10'>
            <div className="intro-title-container">
              <div>

                <Row className='intro-row'>
                  <Col md='5' className='mui--text-center'>
                    <img className='intro-image' src="http://www.femside.com/wp-content/uploads/2013/06/travel-family-plane.jpg" alt="Family-Picture"/>
                  </Col>
                  <Col md='7' className='intro-text-container mui--text-center'>
                    <h1 className='intro-title mui--text-display2'>LETS GET STARTED</h1>
                  </Col>
                </Row>


                <br/>

              </div>
            </div>
          </Col>

          <Col md='2'>
            <div className="intro-arrow mui--text-right">
              <a href="#questionnaire/1" onClick={this.nextPage}>
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
