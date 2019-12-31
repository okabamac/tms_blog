const path = require(`path`);
const _ = require('lodash');
const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js');

 const postsByTag = {};
  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if(!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node)
      })
    }
  })

  let tags = Object.keys(postsByTag);
  tags = _.uniq(tags);
  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    }
  })
  tags.forEach(tagName => {
    const posts = postsByTag[tagName];
    createPage({
      path: `/tags/${_.kebabCase(tagName)}/`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)

  const result = await graphql(`
   query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
              date(formatString: "MMMM DD, YYYY")
            }
             excerpt
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.allMarkdownRemark.edges;
  createTagPages(createPage, posts);
  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path;
    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        pathSlug: path,
        prev: index === 0 ? null : posts[index-1].node,
        next: index === (posts.length - 1) ? null : posts[index+1].node
      }, // additional data can be passed via context
    })
  })
}
