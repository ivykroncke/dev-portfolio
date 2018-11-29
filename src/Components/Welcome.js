import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const WelcomeDiv = styled.div`
width: 100%;
height: 85vh;
background-image: url('/img/desktop.jpg');
background-size: cover;
background-position: center;
display: flex;
align-items: flex-end;
justify-content: flex-start;
${media.lessThan('600px')`
    height: 80vh;
    padding: 5vw;
`}
`

const TextDiv = styled.div`
width: 10rem;
height: 10rem;
background-color: rgb(148, 165, 174);
border: white solid .25rem;
box-shadow: 1rem 1rem 3rem rgba(91, 91, 91, 0.58);
margin: 5vh 10vw;
padding: 3vw;
border-radius: 100%;

display: flex;
align-items: center;
justify-content: center;
${media.lessThan('600px')`
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 4vw;
`}
`

const Text = styled.div`
color: white;
text-align: center;
padding: 1.25vh 1.25vw;
font-size: 1rem;
line-height: 1.2rem;
`

export default class Welcome extends Component {
  render() {
    return (
      <WelcomeDiv>
        <TextDiv>
        <Text>WEB DEVELOPER &amp; DESIGNER</Text>
        </TextDiv>
      </WelcomeDiv>
    )
  }
}
