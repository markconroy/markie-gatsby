import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CardList from '../components/card-list'
import Container from '../components/container'

export default function SpeakingListingPage({ data }) {
  const cards = data.speakingPosts.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Speaking - Scroll horizontally!</h1>
        <p>we have {data.speakingPosts.nodes.length} articles</p>
        <CardList cards={cards} />
      </Container>
    </Layout>
  )
}

export const SpeakingListingPageQuery = graphql`
  query SpeakingistingQuery {
    speakingPosts: allNodeSpeaking(sort: { fields: created, order: DESC }) {
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
