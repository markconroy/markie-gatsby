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
import SocialShare from '../components/SocialShare'

const ArticleStyles = styled.article`
  a {
    color: var(--color-primary);
  }
  h2,
  h3 {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--color-white);
  }
`

export default function SingleArticlePage({ data: { speaking }, location }) {
  const videoUrl =
    speaking.relationships.field_main_video.field_media_oembed_video
      .split('=')
      .pop()
  const shareLink = location.href
  const articleTitle = speaking.title

  return (
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
        <Container>
          <PageTitleContainer>
            <h1>{speaking.title}</h1>
          </PageTitleContainer>
        </Container>
        <Container>
          <div
            dangerouslySetInnerHTML={{ __html: speaking.field_intro.value }}
          />

          <Video
            videoSrcURL={`https://www.youtube.com/embed/${videoUrl}`}
            videoTitle={speaking.title}
          />

          <SocialShare
            shareLink={shareLink}
            twitterText={articleTitle}
            whatsAppText={articleTitle}
            linkedInTitle={articleTitle}
            linkedInSummary={articleTitle}
            emailSubject={articleTitle}
            emailBody={articleTitle}
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
          ... on media__remote_video {
            field_media_oembed_video
          }
        }
      }
    }
  }
`
