import React from 'react'
import { graphql, Link } from 'gatsby'
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
`

export default function SingleArticlePage({ data: { speaking } }) {
  return (
    <>
      <Layout>
        <SEO title={speaking.title} />
        <Container>
          <ArticleStyles>
            <p>{speaking.field_speaking_date}</p>
            <p>{speaking.field_speaking_where}</p>
            <p>{speaking.relationships.field_speaking_conference.name}</p>
            <h1>{speaking.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: speaking.field_intro.value }}
            />
            <p>
              {
                speaking.relationships.field_main_video
                  .field_media_video_embed_field
              }
            </p>
            <h2>Filed Under:</h2>
            <ul>
              {speaking.relationships.field_tags.map(tag => (
                <li>
                  <Link to={tag.path.alias} key={tag.id}>
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
    speaking: nodeSpeaking(path: { alias: { eq: $slug } }) {
      id
      title
      field_intro {
        value
      }
      field_speaking_date
      field_speaking_where
      relationships {
        field_speaking_conference {
          name
        }
        field_tags {
          name
          path {
            alias
          }
        }
        field_main_video {
          field_media_video_embed_field
        }
      }
    }
  }
`
