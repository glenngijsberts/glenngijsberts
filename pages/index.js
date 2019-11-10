import React from 'react'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'
import { H1, H4, H2, H6, Avatar, color, space, device, Banner } from '@ticketswap/solar'
import { colors } from '../styles/theme'
import Content from '../components/Content'
import socials from '../content/socials'

const SubTitle = styled(H4)`
  color: ${color.spaceLight};
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
  background-color: ${colors.lightGrey};
  color: ${color.spaceMedium};

  svg {
    fill: ${colors.primary};
  }

  h2 {
    color: ${colors.primary};
  }

  margin-bottom: ${space[64]};
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
          Als student Communication & Multimedia Design ben ik bezig met het ontwerpen van gebruiksvriendelijke
          (digitale) toepassingen. Naast mijn studie werk ik als Front-end developer bij{' '}
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
  </>
)
