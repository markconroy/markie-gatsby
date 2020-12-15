import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/Container'

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Mark Conroy" />
      <Container>
        <h1>About</h1>
        <p>About info will go here</p>
      </Container>
    </Layout>
  )
}
