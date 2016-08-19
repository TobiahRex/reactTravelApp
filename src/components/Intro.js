import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  Panel,
  Container,
  Col,
  Row } from 'muicss/react';
import * as txClientActions from '../actions/txClientActions.js';


class Intro extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    const newClient = {
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
    };
    this.props.actions.createClient(newClient);
  }

  render() {
    return (
      <div className="slide">
        <Row className="intro-row">
          <Col md="10">
            <div className="intro-title-container">
              <div>

                <Row className="intro-row">
                  <Col md="5" className="mui--text-center">
                    <img
                      className="intro-image" src="http://www.femside.com/wp-content/uploads/2013/06/travel-family-plane.jpg" alt="Family" />
                  </Col>
                  <Col
                    md="7"
                    className="intro-text-container mui--text-center">
                    <h1 className="intro-title mui--text-display2">
                      LETS GET STARTED
                    </h1>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
          <Col md="2">

            <div className="intro-arrow mui--text-right">
              <a href="#questionnaire/1" onClick={this.nextPage}>
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

Intro.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(txClientActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Intro);
