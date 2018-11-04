import React, { Component } from 'react'
import Content from './Content'
import styled from 'styled-components'
import SiteTitle from './SiteTitle';
import 'semantic-ui-css/semantic.min.css';
import Footer from './Footer';

const HomeWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
`

const ImageLayer = styled.div`
    background-image: url('/img/ivyworking.jpg');
    background-size: 110%;
    background-position: center;
`

const ContentWrapper = styled.div`
    background-color: rgba(92, 147, 203, 0.65);
    display: flex;
    align-items: space-around;
    justify-content: flex-start;
    flex-direction: column;
    background-size: cover;
    width: 98vw;
    height: 98vh;
    text-shadow: 2px 2px 10px rgba(60, 81, 107, 0.93);
`

export default class Home extends Component {

    state = {

    }

    render() {
        return (
            <HomeWrapper>
                <ImageLayer>
                    <ContentWrapper>
                        <SiteTitle />
                        <Content />
                        <Footer />
                    </ContentWrapper>
                </ImageLayer>
            </HomeWrapper>
        )
    }
}
