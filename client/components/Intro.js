import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions.js'
import { Button, Panel, Container } from 'muicss/react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


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
        <Row>
          <Col md='10'>
            <div className="intro-title-container mui--z2">
              <Container>

                <Row>
                  <Col md='7' className='intro-text-container mui--text-center'>
                    <h1 className='intro-title mui--text-display2'>LETS GET STARTED</h1>
                    <p className="mui--text-headline mui--text-white mui--text-center intro-message">Tell us...
                      <br /> <br />
                    <span className='mui--text-display1 mui--text-center'> Who, When, and Where </span>
                      <br /> <br />
                      ...Well give you the What</p>
                  </Col>
                  <Col md='5' className='mui--text-center'>
                    <img className='intro-image' src="http://www.femside.com/wp-content/uploads/2013/06/travel-family-plane.jpg" alt="Family-Picture"/>
                  </Col>
                </Row>


                <br/>

              </Container>
            </div>
          </Col>

          <Col md='2'>
            <div className="intro-arrow mui--text-right">
              <Button  variant="fab" color="primary"> <i className="fa fa-arrow-right"></i> </Button>
              <a href="#questionnaire/1" onClick={this.nextPage}>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
