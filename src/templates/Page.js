import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../styles/Container'
import ArticleMeta from '../styles/ArticleMeta'
import TagList from '../styles/TagList'
import Video from '../components/media/video'

const ArticleStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
`

export default function SingleArticlePage({ data }) {
  return (
    <>
      <Layout>
        <SEO title={data.nodePage.title} />
        <Container>
          <ArticleStyles>
            <h1>{data.nodePage.title}</h1>
            {data.nodePage.field_intro?.value ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: data.nodePage.field_intro.value,
                }}
              />
            ) : null}
            <div
              dangerouslySetInnerHTML={{
                __html: data.nodePage.body.value,
              }}
            />
          </ArticleStyles>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodePage(path: { alias: { eq: $slug } }) {
      id
      title
      field_intro {
        value
      }
      body {
        value
      }
    }
  }
`
