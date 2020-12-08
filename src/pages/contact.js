import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/container'

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact Mark Conroy" />
      <Container>
        <h1>Contact Me!</h1>
        <p>Contact info will go here</p>
      </Container>
    </Layout>
  )
}
