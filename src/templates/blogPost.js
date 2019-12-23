import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"


const Template = ({data, pageContext}) => {
  const {next, prev } = pageContext;
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
    return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
        <div css={css`
                margin-bottom: 1rem;
              `}>
          {next && <Link to={next.frontmatter.path}>Next</Link>}
     </div>
      <div>
          {prev && <Link to={prev.frontmatter.path}>Pevious</Link>}
      </div>
    </div>
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
      }
    }
  }
`
export default Template
