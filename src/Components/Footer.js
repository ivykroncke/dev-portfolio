import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const StyledFooter = styled.div`
    padding: 5vh 5vw;
    display: flex;
`

const FooterIcon = styled( Icon )`
    padding: 0 3vw;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterIcon name='github' size='large' />
        <FooterIcon name='mail' size='large' />
        <FooterIcon name='linkedin' size='large' />
      </StyledFooter>
    )
  }
}
