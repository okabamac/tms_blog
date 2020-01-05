import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";


export default ({ data }) => {
  return (
    <Layout>
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
          `}>{data.allMarkdownRemark.totalCount} Posts</span>
        </div>
        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => (
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
        <div>
          <Link to='/tags'>
            Browse by Tag
          </Link>
        </div>
    </Layout>
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
         excerpt
      }
    }
  }
}
`
