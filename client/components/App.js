import React, { Component } from 'react'
export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <div className="text-center">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
