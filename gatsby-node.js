const path = require("path");

/**
 * we can fetch data, generate pages here
 */

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.title,
      component: path.resolve("./src/templates/postDetails.js"),
      context: { title: node.frontmatter.title },
    });
  });
};

