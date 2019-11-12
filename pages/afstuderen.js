import React from 'react'
import styled from '@emotion/styled'
import { H1, H3, H5, Image, device } from '@ticketswap/solar'
import { NextSeo } from 'next-seo'
import Content from '../components/Content'
import Link from 'next/link'
import { colors } from '../styles/theme'

const Page = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`

const Header = styled.header`
  margin-bottom: 32px;
`

const StyledH1 = styled(H1)`
  margin-bottom: 8px;
`

const StyledH3 = styled(H3)`
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  margin-bottom: 32px;
  line-height: 36px;
`

const Figure = styled.figure`
  margin-bottom: 32px;
`

const Caption = styled.figcaption`
  font-size: 14px;
  margin-top: 4px;
  color: lightgrey;
`

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const InfoBlock = styled.article`
  h5 {
    color: ${colors.primary};
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
  }
`

export default () => (
  <>
    <NextSeo
      title="Glenn Gijsberts - Afstuderen"
      description="Ik ben op zoek naar een afstudeerstage - Glenn Gijsberts"
      openGraph={{
        url: 'https://glenngijsberts.now.sh/',
        title: 'Glenn Gijsberts - Afstuderen',
        description: 'Ik ben op zoek naar een afstudeerstage - Glenn Gijsberts',
        images: [{ url: 'https://glenngijsberts.now.sh/img/glenngijsberts.jpg' }],
        site_name: 'Op zoek naar een afstudeerstage - Glenn Gijsberts',
      }}
      twitter={{
        handle: '@glenngijsberts',
        cardType: 'summary_large_image',
        image: 'https://glenngijsberts.now.sh/img/glenngijsberts.jpg',
      }}
    />

    <Page>
      <Content>
        <Header>
          <Link href="/">
            <a>&larr; Terug naar home</a>
          </Link>
        </Header>

        <StyledH1>Ik ben op zoek naar een afstudeerstage!</StyledH1>
        <StyledH3>
          Als student Communication & Multimedia Design ben ik op zoek naar een uitdagende interaction design opdracht.
        </StyledH3>

        <Figure>
          <Image rounded src="/img/afstuderen.jpg" />
          <Caption>Photo by NEW DATA SERVICES</Caption>
        </Figure>

        <Paragraph>
          Mijn naam is Glenn Gijsberts en ik ben student aan De Haagse Hogeschool. Ik ben op zoek naar een uitdagende
          Interaction Design opdracht voor mijn afstuderen. Tijdens het afstuderen zal ik een digitale toepassing
          ontwerpen als onderdeel van mijn scriptie. Het is de bedoeling dat ik dit kan doen tijdens een stage die van
          start gaat in Februari 2020.
        </Paragraph>

        <Paragraph>
          In de afgelopen 3,5 jaar heb ik kennis gemaakt met Interaction Design. Tijdens de studie heb ik meer te leren
          gekregen over onderzoek doen, het bedenken van concepten, het uitwerken van concepten naar ontwerpen en het
          realiseren van High-Fi prototypes. Daarnaast heb ik geleerd om deze prototypes te testen. Tijdens dit proces
          staat vooral de gebruiker centraal.
        </Paragraph>

        <Paragraph>
          Tijdens mijn afstudeerstage zullen deze dingen ook terug komen. Ik ben dus op zoek naar een uitdagende
          opdracht, zoals het ontwerpen van een nieuwe (web)applicatie of het herontwerpen van een verouderde
          toepassing. Ik heb daarbij begeleiding nodig van een bedrijfsmentor die een soortgelijke functie heeft. Mijn
          voorkeur gaat uit naar een bedrijf in de buurt van Den Haag, maar ergens anders in de randstad zoals Amsterdam
          zou ook niet erg zijn.
        </Paragraph>

        <Paragraph>
          Ik ben sterk in het uitdenken van flows in een applicatie, en weet design patterns goed toe te passen in mijn
          ontwerpen. Ik kan op basis van onderzoek concepten bedenken en kan goed op papier zetten wat de requirements
          zijn voor een project. Daarnaast ben ik zeer technisch aangelegd dus ik kan me naast de gebruiker ook goed
          inleven in een programmeur die eventueel met het ontwerp aan de slag moet gaan. Ik ben minder sterk in visual
          design en onderzoek doen. Mijn interesses gaan vooral uit naar de ontwerp en realisatie fase.
        </Paragraph>

        <Paragraph>
          Mocht je wat leuks voor mij weten, dan hoor ik dat graag. Je kan met me connecten op{' '}
          <a href="https://www.linkedin.com/in/glenn-gijsberts-0341a463/">LinkedIn</a> of een mail sturen naar{' '}
          <a href="mailto:glenngijsberts95@gmail.com">glenngijsberts95@gmail.com</a>.
        </Paragraph>

        <Info>
          <InfoBlock>
            <H5>Competenties</H5>
            <p>Onderzoeken</p>
            <p>Conceptualisern</p>
            <p>Visualiseren en prototypes maken</p>
            <p>Evalueren en valideren</p>
            <p>Plannen en samenwerken</p>
            <p>Reflecteren</p>
          </InfoBlock>
        </Info>
      </Content>
    </Page>
  </>
)
