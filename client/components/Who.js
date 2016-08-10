import React, { Component } from 'react';

export default class Who extends Component {
  constructor(props) {
    super(props);

    this.state = {
      male: "client/styles/images/male_shilouette.png",
      female: "client/styles/images/female_shilouette.png",
      kids: "client/styles/images/kids_shillouette.png",
    }
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
              <img className="who-male-img" src={this.state.male} onMouseEnter={(e) => this.setState({ male: "client/styles/images/male_shilouette_black copy.png" })} onMouseOut={(e) => this.setState({ male: "client/styles/images/male_shilouette.png" })} />
            </div>
            <div className="who-female-img-container col-xs-3 col-xs-offset-1">

              <img className="who-female-img" src={this.state.female} onMouseEnter={(e) => this.setState({ female: "client/styles/images/female_shilouette_black copy.png" })} onMouseOut={(e) => this.setState({ female: "client/styles/images/female_shilouette.png" })} />

            </div>
            <div className="who-kids-img-container col-xs-3">
              <img className="who-kids-img" src={this.state.kids} onMouseEnter={(e) => this.setState({ kids: "client/styles/images/kids_shillouette_black copy.png" })} onMouseOut={(e) => this.setState({ kids: "client/styles/images/kids_shillouette.png" })} />
            </div>
          </div>
          <br/>
          <div className="counter-container">
            <div className="text-center well who-counter-well col-xs-3">
              1
            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">
              1
            </div>
            <div className="text-center well who-counter-well col-xs-3 col-xs-offset-1">
              3
            </div>
          </div>
        </div>
      </div>
    )
  }
}
