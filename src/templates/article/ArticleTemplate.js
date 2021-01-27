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

const ArticleStyles = styled.article`
  .article__intro {
    margin-bottom: 3rem;
    border-left: 0.5rem solid var(--color-primary);
    padding: 0.5rem 1rem;
  }
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
        <Container>
          <ArticleStyles>
            <ArticleMeta>
              <p>Published: {articleCreated}</p>
            </ArticleMeta>
            <h1>{articleTitle}</h1>
            {articleIntro ? (
              <div
                className="article__intro"
                dangerouslySetInnerHTML={{ __html: articleIntro }}
              />
            ) : (
              ''
            )}
            {articleImage && <Img fluid={articleImage} alt={articleImageAlt} />}
            <div dangerouslySetInnerHTML={{ __html: articleBody }} />
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
          </ArticleStyles>
        </Container>
      </Layout>
    </>
  )
}
