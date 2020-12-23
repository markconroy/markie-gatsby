import React, { useEffect } from 'react'
import { renderToString } from 'react-dom/server'
import { graphql } from 'gatsby'
import SingleArticlePageTemplate from './ArticleTemplate'
import InlineMedia from '../../components/InlineMedia'

export default function SingleArticlePageDrupal({
  data: { article, inlineMediaResults },
}) {
  useEffect(() => {
    const inlineMedia = document.querySelectorAll('drupal-media')
    // console.log(inlineMedia)
    if (inlineMedia) {
      inlineMedia.forEach(inlineMediaItem => {
        const inlineMediaItemId = inlineMediaItem.dataset.entityUuid
        console.log(inlineMediaItemId)
        inlineMediaResults.edges.map(inlineMediaResult => {
          const inlineMediaResultId = `Media Id: ${inlineMediaResult.node.id}`
          const inlineMediaResultDrupalId = inlineMediaResult.node.relationships
            .media__image
            ? `Drupal Id: ${inlineMediaResult.node.relationships.media__image[0].drupal_id}`
            : 'marky'

          console.log(inlineMediaResultId, inlineMediaResultDrupalId)
          return (
            <>
              <p>Media: {inlineMediaResultId}</p>
              <p>Drupal: {inlineMediaResultDrupalId}</p>
            </>
          )
        })
        const inlineMediaItemHTML = renderToString(
          <InlineMedia
            mediaType="image"
            inlineImageSource="Put Source Here"
            inlineImageAlt="put alt tag here"
            mediaId={`key-${inlineMediaItem.index}`}
          />
        )
        return `${(inlineMediaItem.innerHTML = inlineMediaItemHTML)} + ${
          inlineMediaItem.index
        }`
      })
    }
  })
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
    inlineMediaResults: allMediaTypeMediaType {
      edges {
        node {
          id
          relationships {
            media__image {
              id
              drupal_id
              field_m_image_image {
                alt
              }
              relationships {
                field_m_image_image {
                  localFile {
                    name
                  }
                }
              }
            }
            media__video {
              drupal_id
              id
              name
              field_media_video_embed_field
            }
          }
        }
      }
    }
  }
`
