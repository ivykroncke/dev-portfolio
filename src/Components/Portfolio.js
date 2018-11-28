import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const PortfolioContainer = styled.div`
width: 100vw;
padding-top: 4vh;
margin: 5vh 10vw 0 10vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const StyledHThree = styled.h3`

`

const ProjectList = styled.div`
margin: 10vh 10vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
grid-gap: 5vw;
text-align: center;
`

const CustomCard = styled.div`
`

const PortfolioThumbnail = styled.img`
height: 50vh;
box-shadow: .75rem .75rem 1.5rem rgba(91, 91, 91, 0.58);
`

const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const PortfolioLinks = styled.a`
padding: 2vh 1vw;
`

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer id='portfolio'>
        <StyledHThree>
          Select Portfolio
        </StyledHThree>
        <ProjectList>
          <CustomCard>
            <PortfolioThumbnail src='/img/pantry.jpg' alt='pantry' />
            <h4>Pantry</h4>
            <div>A meal-planning app with exportable grocery lists.</div>
            <IconContainer>
              <PortfolioLinks href='https://github.com/ivykroncke/pantry' target='blank'><Icon name='github' /></PortfolioLinks>
              <PortfolioLinks href='https://radiant-falls-39293.herokuapp.com/' target='blank'><Icon name='external alternate' /></PortfolioLinks>
            </IconContainer>
          </CustomCard>
          <CustomCard>
            <PortfolioThumbnail src='/img/artfind.jpg' alt='artfind' />
            <h4>artfind.</h4>
            <div>An app for discovering new artists and artworks you love.</div>
            <IconContainer>
              <PortfolioLinks href='https://github.com/ivykroncke/artapp' target='blank'><Icon name='github' /></PortfolioLinks>
              <PortfolioLinks href='https://kroncke-art-app.herokuapp.com/' target='blank'><Icon name="external alternate"/></PortfolioLinks>
            </IconContainer>
          </CustomCard>
          <CustomCard>
            <PortfolioThumbnail src='/img/birdie.jpg' alt='birdie' />
            <h4>Birdie</h4>
            <div>A backyard birdwatcher's companion and field guide.</div>
            <IconContainer>
              <PortfolioLinks href='https://github.com/ivykroncke/birdie' target='blank'><Icon name='github' /></PortfolioLinks>
              <PortfolioLinks href='https://birdie-app.herokuapp.com/' target='blank'><Icon name="external alternate" /></PortfolioLinks>
            </IconContainer>
          </CustomCard>
        </ProjectList>
      </PortfolioContainer>
    )
  }
}
