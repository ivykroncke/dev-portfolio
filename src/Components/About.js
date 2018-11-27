import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const AboutContainer = styled.div`
width: 75vw;
display: flex;
justify-content: center;
align-items: center;
${media.lessThan('medium')`
    flex-direction: column;
  `}
`

const StyledImage = styled.div`
background-image: url('/img/ivyworking.jpg');
background-size: cover;
background-position: right;
width: 15rem;
height: 15rem;
border-radius: 2vh;
border: white .25rem solid;
${media.lessThan('medium')`
    height: 10rem;
  `}
`

const TextContainer = styled.div`
padding-left: 4vw;
width: 25rem;
height: 15rem;
font-size: .75rem;
${media.lessThan('medium')`
    font-size: 1rem;
    width: 90%;
    margin: 5vh 0 10vh 0;
  `}
`

const AboutHeading = styled.h3`
font-family: Bitter;
`

const Space = styled.div`
height: 1rem;
`

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
        <StyledImage></StyledImage>
        <TextContainer>
          <AboutHeading>Ivy is a full-stack web developer and designer in Atlanta, Georgia.</AboutHeading>
          <div>Web Developer with a love of design and a meticulous eye for details. Obsessed with going beyond what is required to make beautiful, ingenious websites and applications.</div>
          <Space />
          <div>Technologies Used:</div>
          <div>JavaScript, React, Ruby, Ruby on Rails</div>
          <div>MongoDB, Mongoose, SQL, Postgresql</div>
        </TextContainer>
      </AboutContainer>
    )
  }
}
