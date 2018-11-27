import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Ivy = styled.div`
color: white;
font-family: 'Bitter', sans-serif;
text-align: left;
font-size: 6vh;
${media.lessThan('medium')`
    font-size: 3rem;
  `}
`

export default class SiteTitle extends Component {
    render() {
        return (
             <Ivy>ivy kroncke;</Ivy>
        )
    }
}
