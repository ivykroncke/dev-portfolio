import React, { Component } from 'react'
import styled from 'styled-components'

const WelcomeDiv = styled.div`
width: 100%;
height: 85vh;
background-image: url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c5008952226f48ed4bf5d3ea64ff545&auto=format&fit=crop&w=1650&q=80');
background-size: cover;
display: flex;
align-items: center;
justify-content: flex-end;
`

const TextDiv = styled.div`
background-color: rgba(235, 234, 234, 0.68);
box-shadow: 1.5rem 1.5rem 4rem rgba(91, 91, 91, 0.68);
margin-right: 10vw;
padding: 1vw;
`

export default class Welcome extends Component {
  render() {
    return (
      <WelcomeDiv>
        <TextDiv>
        <div>Ivy is a full-stack web developer </div>
        <div>and designer in Atlanta, Georgia.</div>
        </TextDiv>
      </WelcomeDiv>
    )
  }
}
