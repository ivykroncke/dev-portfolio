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
`

export default class Nav extends Component {
  render() {
    return (
      <StyledNav>
        Alt Nav
      </StyledNav>
    )
  }
}
