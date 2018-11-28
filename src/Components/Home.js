import React, { Component } from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Welcome from './Welcome';

const HomeWrapper = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`

export default class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <Nav />
                <Welcome />
                <Portfolio />
                <About />
                <Footer />
            </HomeWrapper>
        )
    }
}
