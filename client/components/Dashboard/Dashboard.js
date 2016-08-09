import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard-wrapper" className="text-center">
        <img id="dashboard-jumbotron" src="client/styles/images/vapeswitch_blank.png" />
        <h3><i>Make the Switch</i></h3>
        <div className="col-xs-4 col-xs-offset-4">

          <ul className="nav nav-pills" id="dashboard-navpills">
            <li><Link to="about">About</Link></li>
            <li><Link to="mods">Mods</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
