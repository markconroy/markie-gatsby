import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/card-list'

export default function BlogListingPage({ data }) {
  const cards = data.articles.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>we have{data.articles.nodes.length} articles</p>
      <CardList cards={cards} />
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
