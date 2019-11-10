import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import { H1, H4, H3, H2, H6, Avatar, color, space, device, Banner } from '@ticketswap/solar'
import { colors } from '../styles/theme'
import Content from '../components/Content'
import Container from '../components/Container'
import socials from '../content/socials'
import skills from '../content/skills'

const SubTitle = styled(H4)`
  color: ${colors.primary};
  margin-bottom: ${space[16]};

  @media ${device.tablet} {
    margin-bottom: ${space[24]};
  }
`

const Header = styled.header`
  padding-top: ${space[64]};
  margin-bottom: ${space[32]};
  /* text-align: center; */
`

const StyledAvatar = styled(Avatar)`
  margin-bottom: ${space[16]};
`

const Title = styled(H1)`
  @media ${device.tablet} {
    margin-bottom: ${space[8]};
  }
`

const StyledText = styled.p`
  margin-bottom: ${space[16]};
  line-height: 36px;
  text-align: justify;

  @media ${device.tablet} {
    margin-bottom: ${space[24]};
  }
`

const A = styled.a`
  color: ${colors.primary};
`

const Socials = styled.ul`
  display: flex;
`

const Social = styled.li`
  margin-right: 16px;
`

const Contact = styled.div`
  text-align: center;

  a {
    font-weight: bold;
  }

  h5 {
    text-transform: uppercase;
    font-weight: bold;
  }
`

const StyledBanner = styled(Banner)`
  background-color: ${colors.primary};
  color: white;

  svg {
    fill: white;
  }

  h2 {
    color: white;
  }

  margin-bottom: ${space[64]};
`

const About = styled.section`
  margin-top: 48px;
  padding-top: 48px;
  padding-bottom: 48px;
  width: 100%;
  background-color: ${colors.primary};

  @media ${device.tablet} {
    padding-top: 104px;
    padding-bottom: 64px;
  }

  /* @media ${device.laptop} {
    padding-top: 120px;
    padding-bottom: 120px;
  } */
`

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const InfoBlock = styled.article`
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 32px;
  }

  h3 {
    font-size: 16px;
    color: white;
    margin-bottom: 16px;
    font-weight: bold;
  }

  p {
    text-align: justify;
    font-size: 16px;
    color: white;
  }
`

export default () => (
  <>
    <NextSeo
      title="Glenn Gijsberts - Portfolio 👨‍💻"
      description="Glenn Gijsberts - Interaction Design student en Front-end developer"
      openGraph={{
        url: 'https://glenngijsberts.now.sh/',
        title: 'Glenn Gijsberts Portfolio',
        description: 'Glenn Gijsberts - Interaction Design student en Front-end developer',
        images: [{ url: 'https://glenngijsberts.now.sh/img/glenngijsberts.jpg' }],
        site_name: 'Glenn Gijsberts Portfolio',
      }}
      twitter={{
        handle: '@glenngijsberts',
        cardType: 'summary_large_image',
        image: 'https://glenngijsberts.now.sh/img/glenngijsberts.jpg',
      }}
    />

    <Content>
      <Header>
        <StyledAvatar src="/img/glenngijsberts.jpg" size={120} />
        <Title>Glenn Gijsberts</Title>
        <SubTitle>Interaction Design student & Front-end developer</SubTitle>

        <StyledText>
          Als student Communication & Multimedia Design ben ik bezig met het ontwerpen van gebruiksvriendelijke (online)
          producten. Naast mijn studie werk ik als Front-end developer bij{' '}
          <A href="https://www.ticketswap.com" target="_blank">
            TicketSwap
          </A>
          , waar ik meewerk in een multidisciplinair team van ontwerpers en developers.
        </StyledText>

        <Socials>
          {socials.map(({ name, url }) => (
            <Social>
              <a href={url} target="_blank">
                {name}
              </a>
            </Social>
          ))}
        </Socials>
      </Header>

      <a href="">
        <StyledBanner>
          <H2>Help mij!</H2>
          <p>Ik ben op zoek naar een afstudeerstage. Kan jij me verder helpen?</p>
        </StyledBanner>
      </a>

      <Contact>
        <H6>Contact</H6>
        <a href="mailto:glenngijsberts95@gmail.com">glenngijsberts95@gmail.com</a>
      </Contact>
    </Content>

    <About>
      <Container>
        <Info>
          {skills.map(({ title, text }, index) => (
            <InfoBlock key={index}>
              <H3>{title}</H3>
              <p>{text}</p>
            </InfoBlock>
          ))}
        </Info>
      </Container>
    </About>
  </>
)
