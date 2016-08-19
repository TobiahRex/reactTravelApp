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
import * as ClientActions from '../actions/ClientActions.js';

class Who extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
      client: this.props.client,
      clientId: '',
      maleCount: 0,
      male: "client/styles/images/male_shilouette_black.png",
      femaleCount: 0,
      female: "client/styles/images/female_shilouette_black.png",
      kidsCount: 0,
      kids: "client/styles/images/kids_shillouette_black.png",
    };

    this.addMale = this.addMale.bind(this);
    this.addFemale = this.addFemale.bind(this);
    this.addKid = this.addKid.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  addMale() {
    const client = Object.assign({}, this.state.client);
    let maleCount = this.state.maleCount;
    maleCount += 1;

    if (client.who.male === 0) {
      client.who.male = 1;
    } else {
      client.who.male += 1;
    }

    this.props.actions.addClientData(client, client._id);
    this.setState({ maleCount });
  }

  addFemale() {
    const client = Object.assign({}, this.state.client);
    let femaleCount = this.state.femaleCount;
    femaleCount += 1;

    if (client.who.female === 0) {
      client.who.female = 1;
    } else {
      client.who.female += 1;
    }

    this.props.actions.addClientData(client, client._id);
    this.setState({ femaleCount });
  }
  addKid() {
    const client = Object.assign({}, this.state.client);
    let kidsCount = this.state.kidsCount;
    kidsCount += 1;

    if (client.who.kids === 0) {
      client.who.kids = 1;
    } else {
      client.who.kids += 1;
    }

    this.props.actions.addClientData(client, client._id);
    this.setState({ kidsCount });
  }

  nextPage() {
    const total = this.state.femaleCount + this.state.maleCount + this.state.kidsCount;
    if (!total) {
      swal({
        title: 'Ummmm...',
        text: 'We need to know who\'s going.  Lets try again.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#07D928',
      });
    } else if (total > 0) {
      this.setState({ link: '/#questionnaire/2' });
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
                    male: "client/styles/images/male_shilouette_orange.png" })}
                  onMouseOut={(e) => this.setState({
                    male: "client/styles/images/male_shilouette_black.png" })}
                  onClick={this.addMale} />
                <br />
                <div
                  className="male-counter text-center counter-text mui-col-xs-3">
                  {this.state.maleCount}
                </div>
              </div>
              <div className="who-female-img-container mui-col-xs-3">
                <img
                  role="presentation"
                  className="who-female-img"
                  src={this.state.female}
                  onMouseEnter={(e) => this.setState({
                    female: "client/styles/images/female_shilouette_orange.png" })}
                    onMouseOut={(e) => this.setState({
                      female: "client/styles/images/female_shilouette_black.png" })}
                      onClick={this.addFemale} />
                <br />
                <div
                  className="female-counter text-center counter-text mui-col-xs-3 mui-col-xs-offset-1">
                  {this.state.femaleCount}
                </div>
              </div>
              <div className="who-kids-img-container mui-col-xs-4">
                <img
                  role="presentation"
                  className="who-kids-img"
                  src={this.state.kids}
                  onMouseEnter={(e) => this.setState({
                    kids: "client/styles/images/kids_shillouette_orange.png" })}
                  onMouseOut={(e) => this.setState({
                    kids: "client/styles/images/kids_shillouette_black.png" })}
                  onClick={this.addKid} />
                <br />
                <div
                  className="who-kids-counter text-center counter-text mui-col-xs-3 mui-col-xs-offset-1">

                  {this.state.kidsCount}

                </div>
              </div>
            </div>
          </Col>

          <Col md="1" id="who-arrow">
            <a href="#questionnaire/2" onClick={this.nextPage}>
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
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  client: state.client,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ClientActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Who);
