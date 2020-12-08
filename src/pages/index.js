import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Container from '../styles/Container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Hi Marky</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
