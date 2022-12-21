// const dotenv = require('dotenv')
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = {
  siteMetadata: {
    title: `Markie`,
    description: `Gatsby-based version of mark.ie by Mark Conroy.`,
    author: `@markconroy`,
    siteUrl: `https://mark.ie`,
    metaImage: `mark-conroy.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `${process.env.GATSBY_DRUPAL_SOURCE}`,
        basicAuth: {
          username: `${process.env.BASIC_AUTH_USERNAME}`,
          password: `${process.env.BASIC_AUTH_PASSWORD}`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allNodeArticle } }) =>
              allNodeArticle.edges.map(edge => ({
                title: edge.node.title,
                description: edge.node.field_intro.value,
                date: edge.node.created,
                url: site.siteMetadata.siteUrl + edge.node.path.alias,
                guid: site.siteMetadata.siteUrl + edge.node.path.alias,
              })),
            query: `
              {
                allNodeArticle(
                  sort: {fields: created, order: DESC}, filter: {relationships: {field_tags: {elemMatch: {name: {eq: "Drupal Planet"}}}}},
                ) {
                  edges {
                    node {
                      id
                      created
                      path {
                        alias
                      }
                      title
                      field_intro {
                        value
                      }
                    }
                  }
                }
              }
            `,
            output: 'planet/feed.xml',
            title: 'Drupal Planet by Mark Conroy',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Conroy`,
        short_name: `markie`,
        start_url: `/`,
        background_color: `#006699`,
        theme_color: `#006699`,
        display: `minimal-ui`,
        icon: `src/images/markie-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

export default config