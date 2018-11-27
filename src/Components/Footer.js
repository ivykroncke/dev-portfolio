import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const StyledFooter = styled.div`
width: 100vw;
    padding: 2vh 5vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const FooterIcon = styled(Icon)`
  padding: 0 3vw 0 3vw;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <a href='https://github.com/ivykroncke/' target='blank'><FooterIcon name='github' size='large' color='inverted' /></a>
        <a href='mailto:ivy.lane.kroncke@gmail.com'><FooterIcon name='mail' size='large' color='inverted' /></a>
        <a href='https://www.linkedin.com/in/ivykroncke/' target='blank'><FooterIcon name='linkedin' size='large' color='inverted' /></a>
      </StyledFooter>
    )
  }
}
