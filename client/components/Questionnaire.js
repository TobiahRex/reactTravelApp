import React, { Component } from 'react';
import Who from './Who.js';
import Where from './Where.js';
import When from './When.js';
import Intro from './Intro.js';


export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="section questionnaire" data-anchor='questionnaire'>
        <Intro></Intro>
  			<Who></Who>
				<When></When>
				<Where></Where>
			</div>
		)
  }
}
