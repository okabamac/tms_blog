/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Mystery of Sound",
    titleTemplate: "%s · Revealing Sound",
    description:
      "The Mystery of Sound is a music forum where excellence and rudiments of music is taught",
    url: "https://www.themysteryofsound.com", // No trailing slash allowed!
    image: "./static/images/tms.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@themysteryofsound",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 474,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
        name: `pages`,
      }
    },
      {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    }
  ]
}
