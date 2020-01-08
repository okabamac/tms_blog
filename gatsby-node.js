const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require('lodash')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
  const singleTagIndex = path.resolve("src/templates/singleTagIndex.js")
  const blogPost = path.resolve("./src/templates/blogPost.js");

  const result = await graphql(
    `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
              path
              title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog posts pages.

  const posts = result.data.allMarkdownRemark.edges;
  // createTagPages(createPage, posts);
  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: path,
      component: blogPost,
      context: {
        pathSlug: path,
        previous,
        next,
      }, // additional data can be passed via context
    })
  })
  // Create blog-list pages
  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blogList.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  //Make tag page
  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags
    }
  })
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: singleTagIndex,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
