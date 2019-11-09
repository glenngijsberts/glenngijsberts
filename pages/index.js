import React from 'react'
import { NextSeo } from 'next-seo'

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

    <h1>Hello world!!!</h1>
  </>
)
