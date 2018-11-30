import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFoundContainer = styled.div`
background-image: url('/img/desktop.jpg');
background-position: center;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const StyledBox = styled.div`
background-color: rgba(148, 165, 174, .75);
height: 50vh;
width: 50vw;
padding: 5vh 5vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-between;
`

const StyledHeader = styled.div`
color: white;
font-size: 3rem;
font-family: Bitter;
`

const StyledMessage = styled.div`
color: white;
`

export default class Notfound extends Component {
  render() {
    return (
      <NotFoundContainer>
          <StyledBox>
            <StyledHeader>Not Found!</StyledHeader>
            <StyledMessage>Sorry, but the page you were looking for does not exist.</StyledMessage>
            <Link to='/'><Button>Back to Home</Button></Link>
          </StyledBox>
      </NotFoundContainer>
    )
  }
}
