import React, { useEffect } from 'react'
import { renderToString } from 'react-dom/server'
import { graphql } from 'gatsby'
import SingleArticlePageTemplate from './ArticleTemplate'
import InlineMedia from '../../components/media/InlineMedia'

export default function SingleArticlePageDrupal({
  data: { article, inlineMediaVideoResults, inlineMediaImageResults },
  location,
}) {
  useEffect(() => {
    const inlineMedia = document.querySelectorAll('drupal-media')

    const inlineMediaImages = inlineMediaImageResults.edges

    const inlineMediaVideos = inlineMediaVideoResults.edges
    if (inlineMedia) {
      inlineMedia.forEach(inlineMediaItem => {
        const inlineMediaItemId = inlineMediaItem.dataset.entityUuid

        const inlineMediaImage = inlineMediaImages.filter(
          item => item.node.drupal_id === inlineMediaItemId
        )

        const inlineMediaVideo = inlineMediaVideos.filter(
          item => item.node.drupal_id === inlineMediaItemId
        )

        if (inlineMediaImage.length) {
          const inlineMediaItemHTML = renderToString(
            <InlineMedia
              mediaType="image"
              inlineImageSource={
                inlineMediaImage[0].node.relationships.field_m_image_image
                  .localFile.childImageSharp.fluid
              }
              inlineImageAlt={inlineMediaImage[0].node.field_m_image_image.alt}
              mediaId={inlineMediaItemId}
            />
          )
          return `${(inlineMediaItem.innerHTML = inlineMediaItemHTML)}`
        }

        if (inlineMediaVideo.length) {
          const inlineMediaItemHTML = renderToString(
            <InlineMedia
              mediaType="video"
              videoUrl={`https://www.youtube.com/embed/${inlineMediaVideo[0].node.field_media_video_embed_field
                .split('?v=')
                .pop()}`}
              mediaId={inlineMediaItemId}
            />
          )
          return `${(inlineMediaItem.innerHTML = inlineMediaItemHTML)}`
        }
      })
    }
  })

  return (
    <>
      <SingleArticlePageTemplate
        articleCreated={article.created}
        articleTitle={article.title}
        articleBody={article.body.value}
        articleIntro={article.field_intro.value}
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
        articleImageSource={
          article?.relationships?.field_main_image?.relationships
            ?.field_m_image_image?.localFile.childImageSharp.fluid.src
        }
        shareLink={location.href}
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
          id
          drupal_id
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
      }
    }
  }
`
