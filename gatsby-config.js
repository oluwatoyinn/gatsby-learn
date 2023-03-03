/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance, you need different instance for every nodes or files
        name: `posts`,
        // Path to the directory
        path: `${__dirname}/src/posts/`,
      },
    },
    
    //...
  ],
  siteMetadata: {
    title: "Ovatechs M",
    description: "Software Dev",
    address: "Lagos Nigeria",
  },
};
