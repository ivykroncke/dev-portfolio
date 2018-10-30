import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const StyledFooter = styled.div`
    padding: 5vh 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterIcon = styled( Icon )`
    padding: 10vw 5vw;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <a href='https://github.com/ivykroncke/' target='blank'><FooterIcon inverted name='github' size='large' /></a>
        <a href='mailto:ivy.lane.kroncke@gmail.com'><FooterIcon inverted name='mail' size='large' /></a>
        <a href='https://www.linkedin.com/in/ivykroncke/' target='blank'><FooterIcon inverted name='linkedin' size='large' /></a>
      </StyledFooter>
    )
  }
}
