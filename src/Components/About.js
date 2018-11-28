import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const AboutContainer = styled.div`
color: white;
width: 100vw;
background-color: rgb(148, 165, 174);
margin: 0;
padding: 10vh 10vw 0 10vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const StyledImage = styled.div`
height: 30vh;
width: 30vh;
margin: 5vh;
background-image: url('/img/ivy-headshot.jpg');
background-size: cover;
background-position: right;
border-radius: 100%;
border: white solid .25rem;
`

const AboutTextContainer = styled.div`
width: 75vw;
margin-left: 5vw;
word-wrap: normal;
text-align: justify;
`

const StyledHThree = styled.div`
font-size: 1.75rem;
text-align: center;
padding-bottom: 5vh;
`

export default class About extends Component {
  render() {
    return (
      <AboutContainer id='about'>
        <AboutTextContainer>
          <StyledHThree>About Ivy</StyledHThree>
          <p>is a full-stack web developer with a background in fine arts including painting and printmaking. After receiving her Bachelor's of Fine Art from the Lamar Dodd School of Art, she worked in the interior design and art nonprofit industries. Looking for a new challenge, Kroncke completed an immersive thirteen week course in Web Development from General Assembly.</p>
          <p>Kroncke brings her design talents to web projects, combining problem-solving skills in coding with an eye for color and composition.</p>
        </AboutTextContainer>
        <StyledImage />
      </AboutContainer>
    )
  }
}
