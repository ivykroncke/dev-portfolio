import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

const StyledFooter = styled.div`
width: 90vw;
padding: 5vh 5vw;
display: flex;
justify-content: center;
align-items: center;
  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

const FooterIcon = styled(Icon)`
  padding: 0 3vw 0 3vw;
  ${media.lessThan('medium')`
  padding: 0 8vw 0 8vw;
  `}
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <a href='https://github.com/ivykroncke/' target='blank'><FooterIcon name='github' size='large' /></a>
        <a href='mailto:ivy.lane.kroncke@gmail.com'><FooterIcon name='mail' size='large' /></a>
        <a href='https://www.linkedin.com/in/ivykroncke/' target='blank'><FooterIcon name='linkedin' size='large' /></a>
      </StyledFooter>
    )
  }
}
