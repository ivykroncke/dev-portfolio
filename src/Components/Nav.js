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
          <StyledNavItem><div>About</div></StyledNavItem>
          <StyledNavItem href='https://github.com/ivykroncke' target='blank'><div>Portfolio</div></StyledNavItem>
          <StyledNavItem href='mailto:ivy.lane.kroncke@gmail.com?Subject=Hello!'><div>Contact</div></StyledNavItem>
        </NavItemsContainer>
      </NavContainer>
    )
  }
}
