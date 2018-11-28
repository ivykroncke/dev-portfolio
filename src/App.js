import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home';
import styled from 'styled-components'

const AppWrapper = styled.div`
color: rgb(47, 41, 35);
font-size: 1em;
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
            <Route exact path='/' component={Home} />
        </Router>
      </AppWrapper>
    )
  }
}

export default App;
