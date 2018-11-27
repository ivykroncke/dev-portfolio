import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import styled from 'styled-components'

const AppWrapper = styled.div`
color: rgb(47, 41, 35);
height: 100%;
font-family: Lato, sans-serif;
a {
  color: inherit;
  text-decoration: none;
}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </AppWrapper>
    )
  }
}

export default App;
