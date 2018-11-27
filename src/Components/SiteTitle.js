import React, { Component } from 'react'
import styled from 'styled-components'

const Ivy = styled.div`
color: white;
font-family: 'Bitter', sans-serif;
text-align: left;
font-size: 6vh;
`

export default class SiteTitle extends Component {
    render() {
        return (
             <Ivy>ivy kroncke;</Ivy>
        )
    }
}
