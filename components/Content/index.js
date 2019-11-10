import React from 'react'
import styled from '@emotion/styled'
import { device } from '@ticketswap/solar'

const Content = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 0 32px;
  }
`

export default ({ children }) => <Content>{children}</Content>
