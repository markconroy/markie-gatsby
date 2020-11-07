import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const TagStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
`

export default function SingleArticlePage({ data: { tag } }) {
  const articlesTaggedWithThisTag =
    tag.relationships.node__article || tag.relationships.node__speaking
  return (
    <>
      <Layout>
        <SEO title={tag.name} />
        <TagStyles>
          <h1>{tag.name}</h1>
          {/* <div dangerouslySetInnerHTML={{ __html: tag.body.value }} /> */}
          <h2>
            The following {articlesTaggedWithThisTag.length} pages are tagged
            with "{tag.name}":
          </h2>
          <ol>
            {articlesTaggedWithThisTag.map(tagItem => (
              <li>
                <Link to={tagItem.path.alias} key={tagItem.id}>
                  {tagItem.title}
                </Link>
              </li>
            ))}
          </ol>
        </TagStyles>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    tag: taxonomyTermTags(path: { alias: { eq: $slug } }) {
      name
      id
      relationships {
        node__article {
          id
          title
          path {
            alias
          }
        }
        node__speaking {
          id
          title
          path {
            alias
          }
        }
      }
    }
  }
`
