const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
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
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `${process.env.GATSBY_DRUPAL_SOURCE}`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Conroy`,
        short_name: `markie`,
        start_url: `/`,
        background_color: `##006699`,
        theme_color: `##006699`,
        display: `minimal-ui`,
        icon: `src/images/markie-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
