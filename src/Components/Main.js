import React, { Component } from 'react'
import About from './About';
import Portfolio from './Portfolio';
import styled from 'styled-components'
import Welcome from './Welcome';

const MainContainer = styled.div`
width: 100%;
height: 89vh;
`

export default class Main extends Component {

  render() {
    return (
      <MainContainer>
        <Welcome />
      </MainContainer>
    )
  }
}
