import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/Container'
import {
  CardListContainer,
  CardListItem,
} from '../components/list-types/card-list'
import Card from '../components/display-types/card'

export default function BlogListingPage({ data }) {
  const cards = data.articles.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog</h1>
        <p style={{ marginBottom: '4rem' }}>
          Read {cards.length} articles ... and counting!
        </p>
        <CardListContainer>
          {cards.map(card => (
            <>
              <CardListItem cardListItemKey={card.node.id}>
                <Card
                  cardTitle={card.node.title}
                  cardPath={card.node.path.alias}
                  cardCreated={card.node.created}
                />
              </CardListItem>
            </>
          ))}
        </CardListContainer>
      </Container>
    </Layout>
  )
}

export const BlogListingPageQuery = graphql`
  query BlogListingQuery {
    articles: allNodeArticle(sort: { fields: created, order: DESC }) {
      edges {
        node {
          title
          created(fromNow: true)
          id
          path {
            alias
          }
          relationships {
            field_main_image {
              field_m_image_image {
                alt
              }
              relationships {
                field_m_image_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 300, maxHeight: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
