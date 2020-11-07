import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const ArticleStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
`

export default function SingleArticlePage({ data: { article } }) {
  return (
    <>
      <Layout>
        <SEO title={article.title} />
        <ArticleStyles>
          <p>{article.created}</p>
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
          <h2>Filed Under:</h2>
          <ul>
            {article.relationships.field_tags.map(tag => (
              <li>
                <Link to={tag.path.alias} key={tag.id}>
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </ArticleStyles>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    article: nodeArticle(path: { alias: { eq: $slug } }) {
      title
      created(fromNow: true)
      id
      body {
        value
      }
      relationships {
        field_tags {
          id
          name
          path {
            alias
          }
        }
      }
    }
  }
`
