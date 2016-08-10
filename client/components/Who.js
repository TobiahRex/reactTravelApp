import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore.js'
import ClientActions from '../actions/ClientActions.js'

function _getComponentState() {
  let dbClient = ClientStore.getClient();
  let state = {
    client: dbClient.client,
    male: "client/styles/images/male_shilouette.png",
    female: "client/styles/images/female_shilouette.png",
    kids: "client/styles/images/kids_shillouette.png",
  }
  console.log('state: ', state);
  return state;
}

export default class Who extends Component {
  constructor(props) {
    super(props);

    this.state = _getComponentState();

    this.addMale = this.addMale.bind(this);
    this.addFemale = this.addFemale.bind(this);
    this.addKid = this.addKid.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ClientActions.getClientData();
    ClientStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    ClientStore.on('CHANGE', this._onChange);
  }

  addMale(){
    let client = Object.assign({}, this.state.client);
    client.who.male += 1;
    client.type = 'WHO_UPDATE';
    ClientActions.addClientData(this.state.client);
  }
  addFemale(){
    let client = Object.assign({}, this.state.client);
    client.client.who.female += 1;
    client.client.type = 'WHO_UPDATE';
    ClientActions.addClientData(this.state.client.client);
  }
  addKid(){
    let client = Object.assign({}, this.state.client);
    client.client.who.kid += 1;
    client.client.type = 'WHO_UPDATE';
    ClientActions.addClientData(this.state.client.client);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  render() {
    // let maleCount = this.state.client.client.who.male
    // let femaleCount = this.state.client.client.who.female
    // let kidsCount = this.state.client.client.who.kids
    return(
      <div className="slide">
        <div className="who-container">
          <div className="who-title">
            <h1>Who is going?</h1>
          </div>
          <br/>
          <div className="who-image-container row">
            <div className="who-male-img-container col-xs-3">
              <img className="who-male-img" src={this.state.male} onMouseEnter={(e) => this.setState({ male: "client/styles/images/male_shilouette_black.png" })} onMouseOut={(e) => this.setState({ male: "client/styles/images/male_shilouette.png" })} onClick={this.addMale}/>
            </div>
            <div className="who-female-img-container col-xs-3 col-xs-offset-1">

              <img className="who-female-img" src={this.state.female} onMouseEnter={(e) => this.setState({ female: "client/styles/images/female_shilouette_black copy.png" })} onMouseOut={(e) => this.setState({ female: "client/styles/images/female_shilouette.png" })} onClick={this.addFemale}/>

            </div>
            <div className="who-kids-img-container col-xs-3">
              <img className="who-kids-img" src={this.state.kids} onMouseEnter={(e) => this.setState({ kids: "client/styles/images/kids_shillouette_black copy.png" })} onMouseOut={(e) => this.setState({ kids: "client/styles/images/kids_shillouette.png" })} onClick={this.addKid}/>
            </div>
          </div>
          <br/>
          <div className="counter-container">
            <div className="text-center well who-counter-well col-xs-3">

            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">

            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
