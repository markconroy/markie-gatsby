import React from 'react'
import { graphql } from 'gatsby'
import SingleArticlePageTemplate from './ArticleTemplate'

export default function SingleArticlePageDrupal({ data: { article } }) {
  return (
    <>
      <SingleArticlePageTemplate
        articleCreated={article.created}
        articleTitle={article.title}
        articleBody={article.body.value}
        articleImage={
          article.relationships?.field_main_image?.relationships
            ?.field_m_image_image?.localFile
            ? article.relationships.field_main_image.relationships
                .field_m_image_image.localFile.childImageSharp.fluid
            : null
        }
        articleImageAlt={
          article.relationships?.field_main_image?.field_m_image_image?.alt
            ? article.relationships.field_main_image.field_m_image_image.alt
            : null
        }
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
