import React, { Component } from 'react';
import Who from './Who.js';
import Where from './Where.js';
import When from './When.js';
import Intro from './Intro.js';
import Itinerary from './Itinerary';
import { Panel } from 'muicss/react';


export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="section questionnaire" data-anchor='questionnaire'>
        <Panel id='intro-panel'>
          <section id="Steps" className="steps-section">

            <div className="steps-timeline">

              <div className="steps-one">
                <img className="steps-img" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png" alt="" />
                <h3 className="steps-name">
                  Who
                </h3>
              </div>

              <div className="steps-two">
                <img className="steps-img" src="http://icons.iconarchive.com/icons/fps.hu/free-christmas-flat-circle/512/calendar-icon.png" alt="" />
                <h3 className="steps-name">
                  When
                </h3>
              </div>

              <div className="steps-three">
                <img className="steps-img" src="http://www.axis.com/sites/default/files/how-to-buy-icon.png?chunk-nid-35801-chunk-vid-96860" alt="" />
                <h3 className="steps-name">
                  Where
                </h3>
              </div>

              <div className="steps-four">
                <img className="steps-img" src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/racingflags-128.png" alt="" />
                <h3 className="steps-name">
                  What
                </h3>
              </div>




            </div>

          </section>
        </Panel>
        <Intro></Intro>
  			<Who></Who>
				<When></When>
				<Where></Where>
        <Itinerary></Itinerary>
			</div>
		)
  }
}
