import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Container from '../../styles/Container'
import TagList from '../../styles/TagList'
import highlightCode from '../../utils/highlightCode'
import ArticleMeta from '../../styles/ArticleMeta'

export default function SingleArticlePageTemplate({
  articleCreated,
  articleBody,
  articleTitle,
  articleImage,
  articleImageAlt,
  tags,
}) {
  useEffect(() => {
    highlightCode()
  })
  return (
    <>
      <Layout>
        <SEO title={articleTitle} />
        <Container>
          <article>
            <ArticleMeta>
              <p>Published: {articleCreated}</p>
            </ArticleMeta>
            <h1>{articleTitle}</h1>
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
          </article>
        </Container>
      </Layout>
    </>
  )
}
