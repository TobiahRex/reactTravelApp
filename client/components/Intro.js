import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions.js'
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
      <div className="slide row">
        <div className="intro col-xs-11">
            <h1 className='intro-title'>Lets get started...</h1>
        </div>
        <div className="intro-arrow col-xs-1">
          <a href="#questionnaire/1" onClick={this.nextPage}>
          <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
          </a>
        </div>
      </div>
    )
  }
}
