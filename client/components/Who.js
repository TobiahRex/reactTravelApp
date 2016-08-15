import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientStore from '../stores/ClientStore.js'
import ClientActions from '../actions/ClientActions.js'
import { Button, Panel, Container } from 'muicss/react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default class Who extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
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
    this.nextPage = this.nextPage.bind(this);
  }

  addMale(){
    let client = ClientStore.getClient();
    let maleCount = this.state.maleCount;
    maleCount += 1;

    if (client.who.male === 0) {
      client.who.male = 1;
    } else {
      client.who.male += 1;
    }

    ClientActions.addClientData(client, client._id);
    this.setState({ maleCount });
  }

  addFemale(){
    let client = ClientStore.getClient();
    let femaleCount = this.state.femaleCount;
    femaleCount += 1;

    if (client.who.female === 0) {
      client.who.female = 1;
    } else {
      client.who.female += 1;
    }

    ClientActions.addClientData(client, client._id);
    this.setState({ femaleCount });
  }
  addKid(){
    let client = ClientStore.getClient();
    let kidsCount = this.state.kidsCount;
    kidsCount += 1;

    if (client.who.kids === 0) {
      client.who.kids = 1;
    } else {
      client.who.kids += 1;
    }

    ClientActions.addClientData(client, client._id);
    this.setState({ kidsCount });
  }

  nextPage(){
    let total = this.state.femaleCount + this.state.maleCount + this.state.kidsCount;
    if(!total){
      swal({
        title: 'Ummmm...',
        text: 'We need to know who\'s going.  Lets try again.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#07D928',
      });
    } else if (total>0) {
      this.setState({ link:'/#questionnaire/2' })
    }
  }

  render() {
    return(
      <div className="slide">
        <div className="who-title">
          <h5 className='who-title mui--text-display2'>WHO is going?</h5>
        </div>
        <Row id='who-row'>
          <Col md="9" md-offset='2' id='who-container'>
            <div className="who-image-container row">
              <div className="who-male-img-container mui-col-xs-3">
                <img className="who-male-img" src={this.state.male} onMouseEnter={(e) => this.setState({ male: "client/styles/images/male_shilouette_black.png" })} onMouseOut={(e) => this.setState({ male: "client/styles/images/male_shilouette.png" })} onClick={this.addMale}/>
                <br/>
                <div className="text-center counter-text mui-col-xs-3">
                  {this.state.maleCount}
                </div>
              </div>
              <div className="who-female-img-container mui-col-xs-3">
                <img className="who-female-img" src={this.state.female} onMouseEnter={(e) => this.setState({ female: "client/styles/images/female_shilouette_black copy.png" })} onMouseOut={(e) => this.setState({ female: "client/styles/images/female_shilouette.png" })} onClick={this.addFemale}/>
                <br/>
                <div className="text-center counter-text mui-col-xs-3 mui-col-xs-offset-1">
                  {this.state.femaleCount}
                </div>
              </div>
              <div className="who-kids-img-container mui-col-xs-4">
                <img className="who-kids-img" src={this.state.kids} onMouseEnter={(e) => this.setState({ kids: "client/styles/images/kids_shillouette_black copy.png" })} onMouseOut={(e) => this.setState({ kids: "client/styles/images/kids_shillouette.png" })} onClick={this.addKid}/>
                <br/>
                <div className="text-center counter-text mui-col-xs-3 mui-col-xs-offset-1">
                  {this.state.kidsCount}
                </div>
              </div>
            </div>
          </Col>

          <Col md="1" id='who-arrow'>
            <a href="#questionnaire/2" onClick={this.nextPage}>
              <Button  variant="fab" color="primary">
                <i className="fa fa-arrow-right"></i>
              </Button>
            </a>
            <div className="who-arrow">
            </div>
          </Col>

        </Row>

      </div>
    )
  }
}


//
// <div className="slide">
//
// <div className="who-container container-fluid mui-col-md-12">
// <div className="who-title">
// <h1>Who is going?</h1>
// </div>
// <br/>
// <div className="who-image-container row">
// <div className="who-male-img-container mui-col-xs-3">
// <img className="who-male-img" src={this.state.male} onMouseEnter={(e) => this.setState({ male: "client/styles/images/male_shilouette_black.png" })} onMouseOut={(e) => this.setState({ male: "client/styles/images/male_shilouette.png" })} onClick={this.addMale}/>
// </div>
// <div className="who-female-img-container mui-col-xs-3 mui-col-xs-offset-1">
//
// <img className="who-female-img" src={this.state.female} onMouseEnter={(e) => this.setState({ female: "client/styles/images/female_shilouette_black copy.png" })} onMouseOut={(e) => this.setState({ female: "client/styles/images/female_shilouette.png" })} onClick={this.addFemale}/>
//
// </div>
// <div className="who-kids-img-container mui-col-xs-3">
// <img className="who-kids-img" src={this.state.kids} onMouseEnter={(e) => this.setState({ kids: "client/styles/images/kids_shillouette_black copy.png" })} onMouseOut={(e) => this.setState({ kids: "client/styles/images/kids_shillouette.png" })} onClick={this.addKid}/>
// </div>
// </div>
// <div className="counter-container">
// <div className="text-center well who-counter-well mui-col-xs-3">
// {this.state.maleCount}
// </div>
// <div className="text-center well who-counter-well mui-col-xs-3 mui-col-xs-offset-1">
// {this.state.femaleCount}
// </div>
// <div className="text-center well who-counter-well mui-col-xs-3 mui-col-xs-offset-1">
// {this.state.kidsCount}
// </div>
// </div>
// <div className="mui-col-xs-1 who-arrow">
// <a href={this.state.link} onClick={this.nextPage}>
// <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
// </a>
// </div>
// </div>
// </div>
