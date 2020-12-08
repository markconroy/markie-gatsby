import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'

const ArticleStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
  .article__tags {
    padding: 0;
    list-style: none;
  }
  .article__tag {
    margin-bottom: 1rem;
  }
`

export default function SingleArticlePage({ data: { article } }) {
  const tags = article.relationships.field_tags
  return (
    <>
      <Layout>
        <SEO title={article.title} />
        <Container>
          <ArticleStyles>
            <p>{article.created}</p>
            <h1>{article.title}</h1>
            {article?.relationships?.field_main_image?.relationships
              ?.field_m_image_image?.localFile && (
              <Img
                fluid={
                  article.relationships.field_main_image.relationships
                    .field_m_image_image.localFile.childImageSharp.fluid
                }
                alt={
                  article.relationships.field_main_image.field_m_image_image.alt
                }
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
            <h2>Filed Under:</h2>
            <ul className="article__tags">
              {tags.map(tag => (
                <li className="article__tag" key={`list-item${tag.id}`}>
                  <Link to={tag.path.alias} key={`link-to${tag.id}`}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ArticleStyles>
        </Container>
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
        field_main_image {
          field_m_image_image {
            alt
          }
          relationships {
            field_m_image_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
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
