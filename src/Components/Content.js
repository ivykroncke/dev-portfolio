import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
  padding: 6vh 12.5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NavItem = styled.div`
  width: 15vw;
  height: 15vw;
  background-color: hotpink;
  padding: 1rem;
  margin: 0 3vw;
`

export default class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <NavItem>ABOUT coming soon!</NavItem>
        <NavItem>PORTFOLIO coming soon!</NavItem>
        <NavItem>CONTACT coming soon!</NavItem>
      </StyledNav>
    )
  }
}
