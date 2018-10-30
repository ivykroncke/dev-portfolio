import React, { Component } from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
color: white;
padding: 15vh 15vh 5vh 15vh;
  margin-left: 10vw;
  text-align: left;
`

const Ivy = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size: 4rem;
    margin-bottom: 7vh;
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
                    IS A WEB DEVELOPER IN ATLANTA, GEORGIA.
                </TagLine>
            </TitleStyle>
        )
    }
}
