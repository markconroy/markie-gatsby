import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Container from '../../components/container'

const ArticleStyles = styled.article`
  h1 {
    color: var(--color-primary);
  }
  a {
    color: var(--color-secondary);
  }
  .article__tags {
    padding: 0;
    list-style: none;
  }
  .article__tag {
    margin-bottom: 1rem;
  }
`

export default function SingleArticlePageTemplate({
  articleCreated,
  articleBody,
  articleTitle,
  articleImage,
  articleImageAlt,
  tags,
}) {
  // const tags = [
  //   {
  //     id: '82a8e0c0-40a0-5862-a717-076956d33210',
  //     name: 'Frontend Development Mark',
  //     path: {
  //       alias: '/tags/frontend-development',
  //     },
  //   },
  //   {
  //     id: 'b4d28d41-1a37-5793-b66e-cc095a4f41f3',
  //     name: 'CSS',
  //     path: {
  //       alias: '/tags/css',
  //     },
  //   },
  //   {
  //     id: 'f8fa6598-afd1-57c7-a8fa-9e9a7021bc8a',
  //     name: 'JavaScript',
  //     path: {
  //       alias: '/tags/javascript',
  //     },
  //   },
  // ]
  return (
    <>
      <Layout>
        {/* <SEO title={data.article.title} /> */}
        <Container>
          <ArticleStyles>
            <p>{articleCreated}</p>
            <h1>{articleTitle}</h1>
            {articleImage && <Img fluid={articleImage} alt={articleImageAlt} />}
            <div dangerouslySetInnerHTML={{ __html: articleBody }} />
            <h2>Filed Under:</h2>
            <ul className="article__tags">
              {tags.map(tag => (
                <li className="article__tag" key={`list-item${tag.id}`}>
                  <Link to={tag.path.alias} key={`link-to${tag.id}`}>
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
