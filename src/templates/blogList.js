import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPost = ({ data, pageContext }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
          <Layout>
            <SEO
              title={siteTitle}
              keywords={[`music`, `sound`, `rhythm`, `keys`]}
            />
            <div css={css`
            position: relative;
            font-size: 1.5em;
            margin-bottom: 1.5em;
            `}>
          <span css={css`
          position: relative;
          display: inline-block;
          `}>Blog</span>
          <span css={css`
          position: absolute;
          right: 1.5em;
          display: inline-block;
          `}><Link to='/tags'>
                        Tags
          </Link></span>
        </div>
        <section>
          {posts.edges.map(({ node }) => (
            <div key={node.id} css={css`
            margin-bottom: 1.4em;
            `}>
                <h4
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
                </h4>
                <p css={css`
                line-height: 1.5;
                word-wrap: break-word;
                `}>{node.excerpt}</p>
              <Link
                to={node.frontmatter.path}
                css={css`
                position: relative;
                text-decoration: none;
                color: #0e52a5;
                top: 0.2em;
              `}
              >Read <FontAwesomeIcon css={css`
                color: #4d97ff;
                font-size: 80%;
              `} icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </section>
            <ul
              style={{
                position: "relative",
                top: "2em",
                left: "-1em",
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {!isFirst && (
                    <Link to={`blog/${prevPage}`} rel="prev">
                  ← Previous Page
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    to={`/blog/${i === 0 ? '' : i + 1}`}
                    style={{
                      textDecoration: 'none',
                      color: i + 1 === currentPage ? '#ffffff' : '',
                      background: i + 1 === currentPage ? '#007acc' : '',
                    }}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {!isLast && (
                <Link to={`blog/${nextPage}`} rel="next">
                  Next Page →
                </Link>
              )}
            </ul>
          </Layout>
        )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
            tags
          }
        }
      }
    }
  }
`;
export default BlogPost;
