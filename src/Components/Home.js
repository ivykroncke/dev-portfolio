import React, { Component } from 'react'
import Content from './Content'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';
import Footer from './Footer';

const HomeWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
`

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    width: 98vw;
    height: 98vh;
`

export default class Home extends Component {

    state = {

    }

    render() {
        return (
            <HomeWrapper>
                <ContentWrapper>
                    <SiteTitle />
                    <Content />
                    <Footer />
                </ContentWrapper>
            </HomeWrapper>
        )
    }
}
