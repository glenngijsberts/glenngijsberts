import React from 'react'
import styled from '@emotion/styled'
import { device } from '@ticketswap/solar'

const Container = styled.div`
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 0 32px;
  }
`

export default ({ children }) => <Container>{children}</Container>
