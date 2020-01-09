import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Tags = (props) => {
  const { data, pageContext, location } = props
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`music`, `sound`, `rhythm`, `keys`]}
      />
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { path } = node.frontmatter
                    const { title } = node.frontmatter
                    return (
                        <li key={node.id} css={css`
                            display: block;
                            display: list-item;
                            list-style: square;
                            color: blue;
                            margin: 1.5em;
                            `}>
                            <Link css={css`
                                margin-left: -0.7em;
                                `} to={path}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/tags">All tags</Link>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
     site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`