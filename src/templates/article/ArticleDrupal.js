import React from 'react'
import { graphql, Link } from 'gatsby'
import SingleArticlePageTemplate from './ArticleTemplate'
// import Img from 'gatsby-image'
// import styled from 'styled-components'

import SEO from '../../components/seo'
// import Layout from '../../components/layout'
// import Container from '../../components/container'

// const ArticleStyles = styled.article`
//   h1 {
//     color: var(--color-primary);
//   }
//   a {
//     color: var(--color-secondary);
//   }
//   .article__tags {
//     padding: 0;
//     list-style: none;
//   }
//   .article__tag {
//     margin-bottom: 1rem;
//   }
// `

export default function SingleArticlePageDrupal({ data: { article } }) {
  // const tags = article.relationships.field_tags
  console.log('top')
  // console.log(tags)
  console.log('bottom')
  return (
    <>
      <SingleArticlePageTemplate
        articleTitle={article.title}
        articleBody={article.body.value}
        tags={
          article?.relationships?.field_tags
            ? article.relationships.field_tags
            : null
        }
      />
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
