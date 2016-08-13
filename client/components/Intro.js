import React, { Component } from 'react';
import ClientActions from '../actions/ClientActions.js'
import { Button } from 'muicss/react';


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
        <div className="intro col-xs-11">
            <h1 className='intro-title'>Lets get started...</h1>
        </div>
        <div className="intro-arrow col-xs-1 mui--text-right">
          <Button  variant="fab" color="primary"> <i className="fa fa-arrow-right"></i> </Button>
          <a href="#questionnaire/1" onClick={this.nextPage}>
          </a>
        </div>
      </div>
    )
  }
}
