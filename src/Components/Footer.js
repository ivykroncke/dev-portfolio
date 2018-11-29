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
padding-bottom: 5vh;
`

const StyledFooter = styled.div`
width: 30vw;
padding: 5vh 5vw;
display: flex;
justify-content: space-around;
align-items: center;
`

const IconContainer = styled.a`
padding: 0 3vw 0 3vw;
${media.lessThan('600px')`
    padding: 0 5vw 0 5vw;
`}
`


export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <StyledFooter>
          <IconContainer href='https://github.com/ivykroncke/' target='blank'><Icon name='github' size='large' inverted /></IconContainer>
          <IconContainer href='mailto:ivy.lane.kroncke@gmail.com'><Icon name='mail' size='large' inverted /></IconContainer>
          <IconContainer href='https://www.linkedin.com/in/ivykroncke/' target='blank'><Icon name='linkedin' size='large' inverted/></IconContainer>
        </StyledFooter>
      </FooterWrapper>
    )
  }
}
