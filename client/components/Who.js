import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore.js'
import ClientActions from '../actions/ClientActions.js'


export default class Who extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
      clientId: '',
      maleCount: 0,
      male: "client/styles/images/male_shilouette.png",
      femaleCount: 0,
      female: "client/styles/images/female_shilouette.png",
      kidsCount: 0,
      kids: "client/styles/images/kids_shillouette.png",
    }

    this.addMale = this.addMale.bind(this);
    this.addFemale = this.addFemale.bind(this);
    this.addKid = this.addKid.bind(this);
  }




  addMale(){
    let client = ClientStore.getClient(); // get client from store
    let maleCount = this.state.maleCount; // copy maleCount for incrementing.
    maleCount += 1;                       // increment malecount

    let newInfo;
    if (!client.who) { // if this is the first time we're incrementing...
      let newInfo = { who: { male: 1 }};
      ClientActions.addClientData(newInfo, client._id);
    } else if(client.who) {
      client.who[male] += 1;
      console.log('client[who]: ', client[who]);
      // ClientActions.addClientData(client.who, client._id);
    }

    this.setState({ maleCount });         // set new male count.
  }

  addFemale(){
    let client = Object.assign({}, this.state.client);
    client.who.female += 1;
    ClientActions.addClientData(client, client._id);
  }
  addKid(){
    let client = Object.assign({}, this.state.client);
    client.who.kid += 1;
    ClientActions.addClientData(client, client._id);
  }

  render() {
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
              {this.state.maleCount}
            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">
              {this.state.femaleCount}
            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">
              {this.state.kidsCount}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
