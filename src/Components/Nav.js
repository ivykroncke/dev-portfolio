import React, { Component } from 'react'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';
import media from 'styled-media-query';

const NavContainer = styled.div`
margin: 5vh 5vw;
padding: 5vh 5vw 0 5vh;
width: 90vw;
display: flex;
justify-content: space-between;
align-items: center;
  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 3vh 3vw;
  `}
`

const NavItemsContainer = styled.div`
height: 100%;
max-width: 90vw;
display: flex;
font-size: 1rem;
${media.lessThan('medium')`
    margin-top: 4vh;
    font-size: .75rem;
  `}
`

const StyledNavItem = styled.div`
color: white;
padding: 0 1rem 0 1rem;
text-transform: uppercase;
`

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <SiteTitle />
        <NavItemsContainer>
          <StyledNavItem><div>About</div></StyledNavItem>
          <StyledNavItem><div>Portfolio</div></StyledNavItem>
          <StyledNavItem><div>Contact</div></StyledNavItem>
        </NavItemsContainer>
      </NavContainer>
    )
  }
}
