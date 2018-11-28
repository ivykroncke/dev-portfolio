import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

const FooterWrapper = styled.div`
background-color: rgb(148, 165, 174);
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const StyledFooter = styled.div`
width: 30vw;
padding: 5vh 5vw;
display: flex;
justify-content: space-around;
align-items: center;
  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

const FooterIcon = styled(Icon)`
  /* padding: 0 3vw 0 3vw; */
  ${media.lessThan('medium')`
  `}
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <StyledFooter>
          <a href='https://github.com/ivykroncke/' target='blank'><FooterIcon name='github' size='large' inverted /></a>
          <a href='mailto:ivy.lane.kroncke@gmail.com'><FooterIcon name='mail' size='large' inverted /></a>
          <a href='https://www.linkedin.com/in/ivykroncke/' target='blank'><FooterIcon name='linkedin' size='large' inverted/></a>
        </StyledFooter>
      </FooterWrapper>
    )
  }
}
