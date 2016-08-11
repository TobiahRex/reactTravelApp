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
      <div className="slide">
        <div className="intro">
            <h1>Getting started...</h1>
        </div>
        <footer className="questionnaire-footer">
          <a href="#questionnaire/1" onClick={this.nextPage}>
          <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
          </a>
        </footer>
      </div>
    )
  }
}
