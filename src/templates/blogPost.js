import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout";

const Template = ({data, pageContext}) => {
  const {next, prev } = pageContext;
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
    return (
      <Layout>
      <div>
        <h2>{frontmatter.title}</h2>
        <div css={css`
          position: relative
        `}>
              <h4 css={css`
          position: relative;
          display: inline-block;
          opacity:  0.4;
          left: 0;
        `}>{frontmatter.date}</h4>
              <h4 css={css`
           position: absolute;
           display: inline-block;
           right: 0;
           opacity: 0.4;
        `}>{frontmatter.author}</h4>
        </div>
        <div
          css={css`
            position: relative;
            top: 1em;
            line-height: 1.5;
            word-wrap: break-word;
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
        <div css={css`
        position: relative;
        top: 2em;
        `}>
          <div css={css`
                position: relative;
                display: inline-block;
                left: 0;
              `}>
            {next && <Link to={next.frontmatter.path}>Next</Link>}
          </div>
          <div css={css`
                position: absolute;
                display: inline-block;
                right: 0;
              `}>
            {prev && <Link to={prev.frontmatter.path}>Pevious</Link>}
          </div>
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        author
      }
    }
  }
`
export default Template
