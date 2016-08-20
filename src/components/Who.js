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

    // this.addMale = this.addMale.bind(this);
    // this.addFemale = this.addFemale.bind(this);
    // this.addKid = this.addKid.bind(this);
    // this.nextPage = this.nextPage.bind(this);
  }

  // addMale() {
  //   const client = this.props.client;
  //   // let maleCount = this.state.maleCount;
  //   let maleCount = this.props.maleCount;
  //   maleCount += 1;
  //
  //   if (client.who.male === 0) {
  //     client.who.male = 1;
  //   } else {
  //     client.who.male += 1;
  //   }
  //
  // }
  //
  // addFemale() {
  //   // const client = Object.assign({}, this.state.client);
  //   // let femaleCount = this.state.femaleCount;
  //   // femaleCount += 1;
  //   //
  //   // if (client.who.female === 0) {
  //   //   client.who.female = 1;
  //   // } else {
  //   //   client.who.female += 1;
  //   // }
  //   this.props.actions.femaleCountAdd();
  // }
  // addKid() {
  //   // const client = Object.assign({}, this.state.client);
  //   // let kidsCount = this.state.kidsCount;
  //   // kidsCount += 1;
  //   //
  //   // if (client.who.kids === 0) {
  //   //   client.who.kids = 1;
  //   // } else {
  //   //   client.who.kids += 1;
  //   // }
  //   this.props.actions.kidsCountAdd();
  // }

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
                  onClick={this.props.actions.addMale} />
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
                      onClick={this.props.actions.addFemale} />
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
                  onClick={this.props.actions.addKid} />
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
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
  maleCount: state.maleCount,
  femaleCount: state.femaleCount,
  kidsCount: state.kidsCount,
  maleBlack: state.maleBlack,
  maleOrange: state.maleOrange,
  femaleBlack: state.femaleBlack,
  femaleOrange: state.femaleOrange,
  kidsBlack: state.kidsBlack,
  kidsOrange: state.kidsOrange,
});

const mapDispatchToProps = dispatch => ({
  whoActions: bindActionCreators(whoActions, dispatch),
  txActions: bindActionCreators(txClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Who);
