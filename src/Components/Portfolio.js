import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import media from 'styled-media-query'

const PortfolioContainer = styled.div`
width: 100vw;
padding-top: 4vh;
margin: 5vh 10vw 0 10vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const StyledHThree = styled.div`
font-size: 1.75rem;
`

const ProjectList = styled.div`
margin: 10vh 10vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
grid-gap: 5vw;
text-align: center;
${media.lessThan('600px')`
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: auto;
  `}
`

const CustomCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5vh;
`

const PortfolioThumbnail = styled.img`
height: 50vh;
box-shadow: .75rem .75rem 1.5rem rgba(91, 91, 91, 0.58);
`

const PortfolioTitle = styled.div`
font-size: 1.5rem;
padding: 4vh 0 2vh 0;
`

const PortfolioDescription = styled.div`
width: 20vw;
font-size: 1rem;
align-self: center;
${media.lessThan('600px')`
    width: 40vw;
`}
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
            <PortfolioTitle>Pantry</PortfolioTitle>
            <PortfolioDescription>A meal-planning app with exportable grocery lists.</PortfolioDescription>
            <IconContainer>
              <PortfolioLinks href='https://github.com/ivykroncke/pantry' target='blank'><Icon name='github' /></PortfolioLinks>
              <PortfolioLinks href='https://radiant-falls-39293.herokuapp.com/' target='blank'><Icon name='external alternate' /></PortfolioLinks>
            </IconContainer>
          </CustomCard>

          <CustomCard>
            <PortfolioThumbnail src='/img/artfind.jpg' alt='artfind' />
            <PortfolioTitle>artfind.</PortfolioTitle>
            <PortfolioDescription>An app for discovering new artists and artworks you love.</PortfolioDescription>
            <IconContainer>
              <PortfolioLinks href='https://github.com/ivykroncke/artapp' target='blank'><Icon name='github' /></PortfolioLinks>
              <PortfolioLinks href='https://kroncke-art-app.herokuapp.com/' target='blank'><Icon name="external alternate"/></PortfolioLinks>
            </IconContainer>
          </CustomCard>

          <CustomCard>
            <PortfolioThumbnail src='/img/birdie.jpg' alt='birdie' />
            <PortfolioTitle>Birdie</PortfolioTitle>
            <PortfolioDescription>A backyard birdwatcher's companion and field guide.</PortfolioDescription>
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
