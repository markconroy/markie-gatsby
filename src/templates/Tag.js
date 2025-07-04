import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../styles/Container'
import TagList from '../styles/TagList'
import PageTitleContainer from '../styles/PageTitleContainer'

const TagStyles = styled.article`
  a {
    color: var(--color-primary);
  }
`

export default function SingleArticlePage({ data: { tag } }) {
  const tags =
    tag.relationships.node__article || tag.relationships.node__speaking

  // First, safely define sortedTags
  const sortedTags = tags
    ? tags.sort((a, b) => {
        const dateA = new Date(a.created)
        const dateB = new Date(b.created)
        return dateA - dateB
      })
    : []
  return (
    <Layout>
      <SEO title={tag.name} />
      <Container>
        <TagStyles>
          <PageTitleContainer>
            <h1>{tag.name}</h1>
          </PageTitleContainer>
          <h2>
            The following {tags ? tags.length : 0} pages are tagged with "
            {tag.name}":
          </h2>
          <TagList>
            {sortedTags.reverse().map(tagItem => (
              <li>
                <Link to={tagItem.path.alias} key={tagItem.id}>
                  {tagItem.title}
                  {' - '}
                  {tagItem.created}
                </Link>
              </li>
            ))}
          </TagList>
        </TagStyles>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    tag: taxonomyTermTags(path: { alias: { eq: $slug } }) {
      name
      id
      relationships {
        node__article {
          id
          title
          created(formatString: "LL")
          path {
            alias
          }
        }
        node__speaking {
          id
          title
          created(formatString: "LL")
          path {
            alias
          }
        }
      }
    }
  }
`
