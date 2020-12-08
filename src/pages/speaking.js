import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/container'
import {
  CardListContainer,
  CardListItem,
} from '../components/list-types/card-list'
import Card from '../components/display-types/card'

export default function SpeakingListingPage({ data }) {
  const cards = data.speakingPosts.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Speaking</h1>

        <p style={{ marginBottom: '4rem' }}>
          I speak about Frontend Development and Approaches to Frontend
          Development at lots of conferences around Europe.
        </p>
        <CardListContainer>
          {cards.map(card => (
            <>
              <CardListItem cardListItemKey={card.node.id}>
                <Card
                  cardTitle={card.node.title}
                  cardPath={card.node.path.alias}
                  cardCreated={card.node.created}
                  cardImage={
                    card.node.relationships?.field_main_image?.relationships
                      ?.field_m_image_image?.localFile
                      ? card.node.relationships.field_main_image.relationships
                          .field_m_image_image.localFile.childImageSharp.fluid
                      : null
                  }
                />
              </CardListItem>
            </>
          ))}
        </CardListContainer>
      </Container>
    </Layout>
  )
}

export const SpeakingListingPageQuery = graphql`
  query SpeakingistingQuery {
    speakingPosts: allNodeSpeaking(sort: { fields: created, order: DESC }) {
      edges {
        node {
          title
          created(fromNow: true)
          id
          path {
            alias
          }
        }
      }
    }
  }
`
