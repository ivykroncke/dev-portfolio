import React, { Component } from 'react'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';
import media from 'styled-media-query';

const NavContainer = styled.div`
height: 15vh;
width: 90vw;
padding: 3vw;
display: flex;
justify-content: space-between;
align-items: center;
  ${media.lessThan('600px')`
    width: 100vw;
    height: 15vh;
    padding: 5vh 5vw;
    justify-content: flex-end;
    align-items: flex-end;
  `}
`

const NavItemsContainer = styled.div`
max-width: 90vw;
display: flex; 
align-items: center;
font-size: 2.5vh;
${media.lessThan('600px')`
  display: none;
  `}
`

const StyledNavItem = styled.a`
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
          <StyledNavItem href='#portfolio'><div>Portfolio</div></StyledNavItem>
          <StyledNavItem href='#about'><div>About</div></StyledNavItem>
        </NavItemsContainer>
      </NavContainer>
    )
  }
}
