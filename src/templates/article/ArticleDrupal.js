import React from 'react'
import { graphql, Link } from 'gatsby'
import SingleArticlePageTemplate from './ArticleTemplate'
import SEO from '../../components/seo'

export default function SingleArticlePageDrupal({ data: { article } }) {
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
