import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import styled from 'styled-components'
import media from 'styled-media-query'
import Notfound from './Components/Notfound';

const AppWrapper = styled.div`
color: rgb(47, 41, 35);
height: 100%;
font-size: 1.5rem;
font-family: Lato, sans-serif;
a {
  color: inherit;
  text-decoration: none;
}
${media.lessThan('600px')`
  width: 100vw;
  font-size: 1rem;
`}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Notfound} />
          </Switch>
        </Router>
      </AppWrapper>
    )
  }
}

export default App;
