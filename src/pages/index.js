import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Header from "../components/Header"

export default ({ data }) => {
  return (
    <div>
    <Header />
      <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: "0.2em";
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          path
          tags
        }
      }
    }
  }
}
`