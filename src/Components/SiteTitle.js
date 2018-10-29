import React, { Component } from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
  padding-top: 10vh;
  text-align: center;
`

const Ivy = styled.div`
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    margin-bottom: 3vh;
`

const TagLine = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
`

export default class SiteTitle extends Component {
    render() {
        return (
            <TitleStyle>
                <Ivy>
                    IVY KRONCKE
                </Ivy>
                <TagLine>
                    FULL-STACK WEB DEVELOPER IN ATLANTA, GA
                </TagLine>
            </TitleStyle>
        )
    }
}
