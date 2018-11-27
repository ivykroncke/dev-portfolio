import React, { Component } from 'react'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';
import 'semantic-ui-css/semantic.min.css';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';

const HomeWrapper = styled.div`
height: 100vh;
border: 1rem solid white;
background-color: rgb(148, 165, 174);
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
                <Main />
                <Footer />
            </HomeWrapper>
        )
    }
}
