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
        <Panel id='intro-panel'>
          <section id="Steps" className="steps-section">

            <div className="steps-timeline">

              <div className="steps-one">
                <img className="steps-img" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png" alt="" />
                <h3 className="steps-name">
                  Who
                </h3>
              </div>

              <div className="steps-two">
                <img className="steps-img" src="http://icons.iconarchive.com/icons/fps.hu/free-christmas-flat-circle/512/calendar-icon.png" alt="" />
                <h3 className="steps-name">
                  When
                </h3>
              </div>

              <div className="steps-three">
                <img className="steps-img" src="http://www.axis.com/sites/default/files/how-to-buy-icon.png?chunk-nid-35801-chunk-vid-96860" alt="" />
                <h3 className="steps-name">
                  Where
                </h3>
              </div>

              <div className="steps-four">
                <img className="steps-img" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/racingflags-128.png" alt="" />
                <h3 className="steps-name">
                  What
                </h3>
              </div>




            </div>

          </section>
        </Panel>
        <Row>
          <Col md='10'>
            <div className="intro-title-container mui--z2">
              <Container>

                <Row className='intro-row'>
                  <Col md='7' className='intro-text-container mui--text-center'>
                    <h1 className='intro-title mui--text-display2'>LETS GET STARTED</h1>
                    <p className="mui--text-headline mui--text-white mui--text-center intro-message">Tell us...
                      <br /> <br />
                      <span className='mui--text-display1 mui--text-center intro-www'> Who, When, and Where </span>
                      <br /> <br />
                      ...We will give you the What</p>
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
