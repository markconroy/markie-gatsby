import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/card-list'
import Container from '../components/container'

export default function BlogListingPage({ data }) {
  const cards = data.articles.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog - Scroll horizontally!</h1>
        <p>we have {data.articles.nodes.length} articles</p>
        <CardList cards={cards} />
      </Container>
    </Layout>
  )
}

export const BlogListingPageQuery = graphql`
  query BlogListingQuery {
    articles: allNodeArticle(sort: { fields: created, order: DESC }) {
      nodes {
        title
        created(fromNow: true)
        id
        path {
          alias
        }
      }
    }
  }
`
