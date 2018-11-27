import React, { Component } from 'react'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class Main extends Component {
    state = {
        showAbout: true,
        showPortfolio: false,
        showContact: false
    }

  render() {
    return (
      <div>
        {this.state.showAbout ? (<About />): null}
        {this.state.showPortfolio? (<Portfolio />): null}
        {this.state.showContact? (<Contact />): null}
      </div>
    )
  }
}
