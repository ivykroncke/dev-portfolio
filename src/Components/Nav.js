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
    flex-direction: column;
    margin: 3vh 3vw;
  `}
`

const NavItemsContainer = styled.div`
max-width: 90vw;
display: flex;
align-items: center;
font-size: 1rem;
${media.lessThan('600px')`
    margin-top: 4vh;
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
          <StyledNavItem href='#about'><div>About</div></StyledNavItem>
          <StyledNavItem href='#portfolio'><div>Portfolio</div></StyledNavItem>
        </NavItemsContainer>
      </NavContainer>
    )
  }
}
