import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    padding: 5vh 5vw;
    display: flex;
`

const FooterThang = styled.div`
    padding: 0 3vw;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterThang> X </FooterThang>
        <FooterThang> X </FooterThang>
        <FooterThang> X </FooterThang>
      </StyledFooter>
    )
  }
}
