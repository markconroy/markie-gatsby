import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

export default function TagsListingPage({ data }) {
  const tags = data.tags.nodes
  return (
    <Layout>
      <SEO title="Tags" />
      <>
        <Container>
          <h1>Tags</h1>
          <p>we have {tags.length} tags. They are:</p>
          <ul>
            {tags.map(tag => (
              <li>
                <Link to={tag.path.alias} key={tag.id}>
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </>
    </Layout>
  )
}

export const TagsListingPageQuery = graphql`
  query TagsListingQuery {
    tags: allTaxonomyTermTags(sort: { fields: name, order: ASC }) {
      nodes {
        name
        id
        path {
          alias
        }
      }
    }
  }
`
