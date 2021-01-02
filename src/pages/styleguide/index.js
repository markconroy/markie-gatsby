import React from 'react'

import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Container from '../../styles/Container'

const StyleGuideIndexPage = () => (
  <Layout>
    <SEO title="Styleguide" />
    <Container>
      <h1>Styleguide</h1>
      <p>
        This is a simple styleguide to show the different components used to
        create this site.
      </p>
      <ul>
        <li>
          <Link to="/styleguide/article">Blog Post</Link>
        </li>
        <li>
          <Link to="/styleguide/speaking">Speaking Post</Link>
        </li>
        <li>
          <Link to="/styleguide/card-list">Card and Card List</Link>
        </li>
      </ul>
    </Container>
  </Layout>
)

export default StyleGuideIndexPage
