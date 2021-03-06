import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../styles/Container'
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

export default function SingleArticlePage({ data }) {
  return (
    <>
      <Layout>
        <SEO title={data.nodePage.title} />
        <ArticleStyles>
          <PageTitleContainer>
            <h1>
              <Container>{data.nodePage.title}</Container>
            </h1>
          </PageTitleContainer>
          <Container>
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
          </Container>
        </ArticleStyles>
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
