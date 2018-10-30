import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
  padding: 15vh;
  margin-left: 10vw;
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NavItem = styled.div`
  width: 100%;
  margin-right: 20vw;
  color: white;
  font-size: 1.25rem;
  line-height: 2rem;
`

export default class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <NavItem>
        Part artist and part problem solver, Ivy brings an intuitive but logical 
approach to projects. She is most fulfilled when challenged with 
complex problems to solve. Obsessed with details, I am seldom satisfied with simply completing my work, and push to find creative solutions that lead to something
unexpected and extraordinary.
        </NavItem>
      </StyledNav>
    )
  }
}
