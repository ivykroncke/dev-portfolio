import React, { Component } from 'react'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';

const NavContainer = styled.div`
margin: 5vh 5vw;
width: 90vw;
display: flex;
justify-content: space-between;
align-items: center;
`

const NavItemsContainer = styled.div`
height: 100%;
max-width: 90vw;
display: flex;
`

const StyledNavItem = styled.div`
color: white;
font-size: 1rem;
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
