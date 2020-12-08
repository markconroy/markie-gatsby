/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import path from 'path'

async function turnArticlesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const articleTemplate = path.resolve(
    './src/templates/article/ArticleDrupal.js'
  )
  // 2. Query all articles
  const { data } = await graphql(`
    query {
      articles: allNodeArticle {
        nodes {
          title
          id
          path {
            alias
          }
        }
      }
    }
  `)
  // 3. Loop over each article and create a page for it.
  data.articles.nodes.forEach(article => {
    actions.createPage({
      path: `${article.path.alias}`,
      component: articleTemplate,
      context: {
        slug: article.path.alias,
      },
    })
  })
}

async function turnSpeakingIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const speakingPostTemplate = path.resolve('./src/templates/Speaking.js')
  // 2. Query all articles
  const { data } = await graphql(`
    query {
      speakingPosts: allNodeSpeaking {
        nodes {
          title
          id
          path {
            alias
          }
        }
      }
    }
  `)
  // 3. Loop over each article and create a page for it.
  data.speakingPosts.nodes.forEach(speakingPost => {
    actions.createPage({
      path: `${speakingPost.path.alias}`,
      component: speakingPostTemplate,
      context: {
        slug: speakingPost.path.alias,
      },
    })
  })
}

async function turnTagsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const tagTemplate = path.resolve('./src/templates/Tag.js')
  // 2. Query all articles
  const { data } = await graphql(`
    query {
      tags: allTaxonomyTermTags {
        nodes {
          name
          path {
            alias
          }
          relationships {
            node__article {
              title
              id
            }
            node__speaking {
              title
              id
            }
          }
        }
      }
    }
  `)
  // 3. Loop over each article and create a page for it.
  data.tags.nodes.forEach(tag => {
    actions.createPage({
      path: `${tag.path.alias}`,
      component: tagTemplate,
      context: {
        slug: tag.path.alias,
      },
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function.
  await Promise.all([
    turnArticlesIntoPages(params),
    turnSpeakingIntoPages(params),
    turnTagsIntoPages(params),
  ])
}
