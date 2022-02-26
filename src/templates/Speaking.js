import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../styles/Container'
import ArticleMeta from '../styles/ArticleMeta'
import TagList from '../styles/TagList'
import Video from '../components/media/video'
import PageTitleContainer from '../styles/PageTitleContainer'

const ArticleStyles = styled.article`
  a {
    color: var(--color-secondary);
  }
  h2,
  h3 {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--color-white);
  }
`

export default function SingleArticlePage({ data: { speaking } }) {
  const videoUrl =
    speaking.relationships.field_main_video.field_media_video_embed_field
      .split('=')
      .pop()

  return (
    <>
      <Layout>
        <SEO title={speaking.title} />
        <ArticleStyles>
          <ArticleMeta>
            <Container>
              <p>
                <strong>Date:</strong> {speaking.field_speaking_date}
              </p>
              <p>
                <strong>Location:</strong> {speaking.field_speaking_where}
              </p>
              <p>
                <strong>Event:</strong>{' '}
                {speaking.relationships.field_speaking_conference.name}
              </p>
            </Container>
          </ArticleMeta>
          <PageTitleContainer>
            <h1>
              <Container>{speaking.title}</Container>
            </h1>
          </PageTitleContainer>
          <Container>
            <div
              dangerouslySetInnerHTML={{ __html: speaking.field_intro.value }}
            />

            <Video
              videoSrcURL={`https://www.youtube.com/embed/${videoUrl}`}
              videoTitle={speaking.title}
            />
            <h2>Filed Under:</h2>
            <TagList>
              {speaking.relationships.field_tags.map(tag => (
                <li>
                  <Link to={tag.path.alias} key={tag.id}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </TagList>
          </Container>
        </ArticleStyles>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
