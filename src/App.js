import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home';
import styled from 'styled-components'
import media from 'styled-media-query'

const AppWrapper = styled.div`
color: rgb(47, 41, 35);
height: 100%;
font-family: Lato, sans-serif;
a {
  color: inherit;
  text-decoration: none;
}
${media.lessThan('600px')`
  width: 100vw;
`}
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
