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
import PageTitleContainer from '../styles/PageTitleContainer'

export default function BlogListingPage({ data }) {
  const cards = data.articles.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <PageTitleContainer>
          <h1>Blog</h1>
        </PageTitleContainer>
      </Container>
      <Container>
        <p style={{ marginBottom: '4rem' }}>
          Read {cards.length} articles ... and counting!
        </p>
        <CardListContainer>
          {cards.map(card => (
            <CardListItem cardListItemKey={card.node.id}>
              <Card
                cardTitle={card.node.title}
                cardPath={card.node.path.alias}
                cardCreated={card.node.created}
              />
            </CardListItem>
          ))}
        </CardListContainer>
      </Container>
    </Layout>
  )
}

export const BlogListingPageQuery = graphql`
  query BlogListingQuery {
    articles: allNodeArticle(sort: { created: DESC }) {
      edges {
        node {
          title
          created(formatString: "LL")
          id
          path {
            alias
          }
        }
      }
    }
  }
`
