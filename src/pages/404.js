import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../styles/Container'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Page Not found" />
      <Container>
        <h1>Page Not Found</h1>
        <p>Looks like that page does not exist.</p>
        <p>How about:</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://the-confident.com/courses/build-a-localgov-drupal-website/">
              Build a LocalGov Drupal Website Course
            </a>
          </li>
          <li>
            <Link to="/blog">My Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
