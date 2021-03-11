import React from 'react'
import { graphql, Link } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../styles/Container'
import ArticleMeta from '../styles/ArticleMeta'

const TagsListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    color: var(--color-primary);
    border-bottom-color: transparent;
  }
  a:focus,
  a:hover {
    text-decoration: none;
  }
  a:focus {
    outline-width: 2px;
    outline-offset: 3px;
  }
  a:hover {
    transition: 0.3s;
    border-bottom-color: var(--color-grey--dark);
  }
  li {
    margin: 1rem;
  }
  li:nth-of-type(2n + 2) a {
    color: var(--color-secondary);
  }
  li:nth-of-type(3n + 3) a {
    color: var(--color-grey-dark);
  }
`

export default function TagsListingPage({ data }) {
  const tags = data.tags.nodes
  return (
    <Layout>
      <SEO title="Tags" />
      <>
        <Container>
          <h1>Tags</h1>
        </Container>
        <ArticleMeta className="margin-bottom">
          <Container>
            <p>This site has {tags.length} tags. They are:</p>
          </Container>
        </ArticleMeta>
        <Container>
          <TagsListStyles>
            {tags.map(tag => {
              const hasArticles =
                tag.relationships.node__article !== null
                  ? tag.relationships.node__article.length
                  : 0
              const hasSpeaking =
                tag.relationships.node__speaking !== null
                  ? tag.relationships.node__speaking.length
                  : 0
              const count = hasArticles + hasSpeaking
              return (
                <li>
                  <Link to={tag.path.alias} key={tag.id}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: `${
                          count === 1 ? '100' : `${100 + count * 7}`
                        }%`,
                      }}
                    >
                      {tag.name} <small>({count})</small>
                    </span>
                  </Link>
                </li>
              )
            })}
          </TagsListStyles>
        </Container>
      </>
    </Layout>
  )
}

export const TagsListingPageQuery = graphql`
  query TagsListingQuery {
    tags: allTaxonomyTermTags(sort: { fields: name, order: ASC }) {
      nodes {
        name
        id
        path {
          alias
        }
        relationships {
          node__article {
            id
            title
          }
          node__speaking {
            id
            title
          }
        }
      }
    }
  }
`
