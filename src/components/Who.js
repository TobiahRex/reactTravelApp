import {
  Button,
  Panel,
  Container,
  Row,
  Col,
} from 'muicss/react';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as txClientActions from '../actions/txClientActions.js';
import * as whoActions from '../actions/whoActions.js';

class Who extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.client,
      male: this.props.maleBlack,
      female: this.props.femaleBlack,
      kids: this.props.kidsBlack,
    };
  }

  nextPage(event) {
    event.preventDefault();
    const total = this.props.femaleCount + this.props.maleCount + this.props.kidsCount;
    if (!total) {
      swal({
        title: 'Ummmm...',
        text: 'We need to know who\'s going.  Lets try again.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#07D928',
      });
    } else if (total > 0) {
      // this.setState({ link: '/#questionnaire/2' });
      this.props.actions.addClientData(this.props.client, this.props.client._id);
      browserHistory.push('/#questionnaire/2');
    }
  }

  render() {
    return (
      <div className="slide">
        <div className="who-title">
          <h5 className="who-title mui--text-display2">WHO is going?</h5>
        </div>
        <Row id="who-row">
          <Col
            md="9"
            md-offset="2"
            id="who-container">
            <div className="who-image-container row">
              <div className="who-male-img-container mui-col-xs-3">
                <img
                  role="presentation"
                  className="who-male-img"
                  src={this.state.male}
                  onMouseEnter={(e) => this.setState({
                    male: this.props.maleOrange })}
                  onMouseOut={(e) => this.setState({
                    male: this.props.maleBlack })}
                  onClick={this.props.whoActions.addMale} />
                <br />
                <div
                  className="male-counter
                  text-center
                  counter-text
                  mui-col-xs-3">
                  {this.props.maleCount}
                </div>
              </div>
              <div className="who-female-img-container mui-col-xs-3">
                <img
                  role="presentation"
                  className="who-female-img"
                  src={this.state.female}
                  onMouseEnter={(e) => this.setState({
                    female: this.props.femaleOrange })}
                    onMouseOut={(e) => this.setState({
                      female: this.props.femaleBlack })}
                      onClick={this.props.whoActions.addFemale} />
                <br />
                <div
                  className="female-counter
                  text-center
                  counter-text
                  mui-col-xs-3
                  mui-col-xs-offset-1">
                  {this.props.femaleCount}
                </div>
              </div>
              <div className="who-kids-img-container mui-col-xs-4">
                <img
                  role="presentation"
                  className="who-kids-img"
                  src={this.state.kids}
                  onMouseEnter={(e) => this.setState({
                    kids: this.props.kidsOrange })}
                  onMouseOut={(e) => this.setState({
                    kids: this.props.kidsBlack })}
                  onClick={this.props.whoActions.addKid} />
                <br />
                <div
                  className="who-kids-counter
                  text-center
                  counter-text
                  mui-col-xs-3
                  mui-col-xs-offset-1">

                  {this.props.kidsCount}

                </div>
              </div>
            </div>
          </Col>

          <Col md="1" id="who-arrow">
            <a
              href="#questionnaire/2"
              onClick={this.nextPage}>
              <Button
                variant="fab"
                color="primary">
                <i className="fa fa-arrow-right" />
              </Button>
            </a>
            <div className="who-arrow" />
          </Col>
        </Row>
      </div>
    );
  }
}

Who.propTypes = {
  client: PropTypes.object,
  maleCount: PropTypes.number,
  femaleCount: PropTypes.number,
  kidsCount: PropTypes.number,
  maleBlack: PropTypes.string.isRequired,
  maleOrange: PropTypes.string.isRequired,
  femaleBlack: PropTypes.string.isRequired,
  femaleOrange: PropTypes.string.isRequired,
  kidsBlack: PropTypes.string.isRequired,
  kidsOrange: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  whoActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
  maleCount: state.who.maleCount,
  femaleCount: state.who.femaleCount,
  kidsCount: state.who.kidsCount,
  maleBlack: state.who.maleBlack,
  maleOrange: state.who.maleOrange,
  femaleBlack: state.who.femaleBlack,
  femaleOrange: state.who.femaleOrange,
  kidsBlack: state.who.kidsBlack,
  kidsOrange: state.who.kidsOrange,
});


const mapDispatchToProps = dispatch => ({
  whoActions: bindActionCreators(whoActions, dispatch),
  actions: bindActionCreators(txClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Who);
