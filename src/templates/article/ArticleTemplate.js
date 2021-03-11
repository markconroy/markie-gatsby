import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Container from '../../styles/Container'
import TagList from '../../styles/TagList'
import highlightCode from '../../utils/highlightCode'
import ArticleMeta from '../../styles/ArticleMeta'
import PageTitleContainer from '../../styles/PageTitleContainer'

const ArticleStyles = styled.article`
  .article__intro {
    margin-bottom: var(--element-spacing-vertical);
    line-height: 1.75;
    border: 2px solid var(--color-grey--light);
    border-left: 1rem solid var(--color-primary);
    background-image: linear-gradient(
      270deg,
      var(--color-grey--light),
      transparent
    );
    padding: 0.5rem 3rem;
    * {
      font-size: clamp(1rem, 2rem, 3rem);
    }
  }
`

const ArticleImageStyles = styled.div`
  margin-bottom: var(--element-spacing-vertical);
`

export default function SingleArticlePageTemplate({
  articleCreated,
  articleBody,
  articleTitle,
  articleIntro,
  articleImage,
  articleImageAlt,
  articleImageSource,
  tags,
}) {
  useEffect(() => {
    highlightCode()
  })
  return (
    <>
      <Layout>
        <SEO
          title={articleTitle}
          description={
            articleIntro ? articleIntro.replace(/(<([^>]+)>)/gi, '') : ''
          }
          metaImageSource={articleImageSource}
        />
        <ArticleStyles>
          <ArticleMeta>
            <Container>
              <p>Published: {articleCreated}</p>
            </Container>
          </ArticleMeta>

          <PageTitleContainer>
            <h1>
              <Container>{articleTitle}</Container>
            </h1>
          </PageTitleContainer>

          <Container>
            {articleIntro ? (
              <div
                className="article__intro"
                dangerouslySetInnerHTML={{ __html: articleIntro }}
              />
            ) : (
              ''
            )}
            {articleImage && (
              <ArticleImageStyles>
                <Img fluid={articleImage} alt={articleImageAlt} />
              </ArticleImageStyles>
            )}
            <div
              className="layout-content"
              dangerouslySetInnerHTML={{ __html: articleBody }}
            />
            <h2>Filed Under:</h2>
            <TagList>
              {tags.map(tag => (
                <li key={`list-item${tag.id}`}>
                  <Link to={tag.path.alias} key={`link-to${tag.id}`}>
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
