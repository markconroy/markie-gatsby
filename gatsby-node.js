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

async function turnPagesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const nodePageTemplate = path.resolve('./src/templates/Page.js')
  // 2. Query all Basic Page nodes
  const { data } = await graphql(`
    query {
      nodePages: allNodePage {
        nodes {
          path {
            alias
          }
        }
      }
    }
  `)
  // 3. Loop over each article and create a page for it.
  data.nodePages.nodes.forEach(nodePage => {
    actions.createPage({
      path: `${nodePage.path.alias}`,
      component: nodePageTemplate,
      context: {
        slug: nodePage.path.alias,
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
          path {
            alias
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
    turnPagesIntoPages(params),
    turnTagsIntoPages(params),
  ])
}
