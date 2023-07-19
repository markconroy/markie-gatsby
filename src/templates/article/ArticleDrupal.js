import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import SingleArticlePageTemplate from './ArticleTemplate'

let postBody

function generateArticleBody(articleContent, inlineImages) {
  const articleBody = articleContent.body.processed
  const regexpMedia = /data-media-id="(\d+)"/gm
  const matchesMedia = [...articleBody.matchAll(regexpMedia)]
  const imageMediaIds = matchesMedia.map(match => parseInt(match[1]))

  const bodyMediaImages = inlineImages.edges
    .filter(item => {
      if (imageMediaIds.includes(item.node.drupal_internal__mid)) {
        return item.node.drupal_internal__mid
      }
    })
    .map(item => item.node)

  if (bodyMediaImages) {
    postBody = parse(articleBody, {
      replace: domNode => {
        if (
          domNode.attribs &&
          domNode.attribs['data-media-source'] === 'image'
        ) {
          const imageData = bodyMediaImages.filter(
            item =>
              item.drupal_internal__mid ===
              parseInt(domNode.attribs['data-media-id'])
          )
          if (imageData) {
            return (
              <GatsbyImage
                image={
                  imageData[0].relationships.field_m_image_image.localFile
                    .childImageSharp.gatsbyImageData
                }
                alt={imageData[0].field_m_image_image.alt}
                key={imageData[0].drupal_id}
              />
            )
          }
        }
      },
    })
  } else {
    postBody = <div dangerouslySetInnerHTML={{ __html: articleBody }} />
  }

  return postBody
}

export default function SingleArticlePageDrupal({
  data: { article, inlineMediaVideoResults, inlineMediaImageResults },
  location,
}) {
  return (
    <SingleArticlePageTemplate
      articleCreated={article.created}
      articleTitle={article.title}
      articleBody={generateArticleBody(article, inlineMediaImageResults)}
      articleIntro={article.field_intro.value}
      articleImage={
        article.relationships?.field_main_image?.relationships
          ?.field_m_image_image?.localFile
          ? article.relationships.field_main_image.relationships
              .field_m_image_image.localFile.childImageSharp.gatsbyImageData
          : null
      }
      articleImageAlt={
        article.relationships?.field_main_image?.field_m_image_image?.alt
          ? article.relationships.field_main_image.field_m_image_image.alt
          : null
      }
      articleImageSource={
        article?.relationships?.field_main_image?.relationships
          ?.field_m_image_image?.localFile.childImageSharp.gatsbyImageData
          .images.fallback.src || 'https://mark.ie/mark-conroy.jpg'
      }
      shareLink={location.href}
      tags={
        article?.relationships?.field_tags
          ? article.relationships.field_tags
          : null
      }
    />
  )
}

export const query = graphql`
  query ($slug: String!) {
    article: nodeArticle(path: { alias: { eq: $slug } }) {
      title
      created(formatString: "LL")
      id
      body {
        value
        processed
      }
      field_intro {
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
                relativePath
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
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
    inlineMediaVideoResults: allMediaVideo {
      edges {
        node {
          field_media_video_embed_field
          name
          id
          drupal_id
        }
      }
    }
    inlineMediaImageResults: allMediaImage {
      edges {
        node {
          drupal_internal__mid
          field_m_image_image {
            alt
          }
          relationships {
            field_m_image_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`
