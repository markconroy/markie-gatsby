import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Container from '../../styles/Container'
import {
  CardListContainer,
  CardListItem,
} from '../../components/list-types/card-list'
import Card from '../../components/display-types/card'

export default function SampleCardListingPage({ data }) {
  // const cards = data.articles.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog</h1>
        <p className="margin-bottom">Read 12 articles ... and counting!</p>
        <CardListContainer>
          <>
            <CardListItem cardListItemKey="1">
              <Card
                cardTitle="Mark Created a Gatsby Tutorial along with Mario"
                cardPath="/styleguide/article"
                cardCreated="2 weeks ago"
              />
            </CardListItem>

            <CardListItem cardListItemKey="1">
              <Card
                cardTitle="Juanluis Helped to Create a Gatsby Tutorial"
                cardPath="/styleguide/article"
                cardCreated="2 weeks ago"
              />
            </CardListItem>

            <CardListItem cardListItemKey="1">
              <Card
                cardTitle="Mark Created a Gatsby Tutorial"
                cardPath="/styleguide/article"
                cardCreated="2 weeks ago"
              />
            </CardListItem>

            <CardListItem cardListItemKey="1">
              <Card
                cardTitle="Juanluis Helped to Create a Gatsby Tutorial"
                cardPath="/styleguide/article"
                cardCreated="2 weeks ago"
              />
            </CardListItem>
          </>
        </CardListContainer>
      </Container>
    </Layout>
  )
}

// export const SampleCardListingPageQuery = graphql`
//   query SampleCardListingQuery {
//     articles: allNodeArticle(sort: { fields: created, order: DESC }) {
//       edges {
//         node {
//           title
//           created(fromNow: true)
//           id
//           path {
//             alias
//           }
//         }
//       }
//     }
//   }
// `
