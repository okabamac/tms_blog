import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Footer from "../components/Subscription"

const Div = styled.div`
    position: relative;
    top: 1em;
    line-height: 1.5;
    word-wrap: break-word;
  img {
    position: relative;
    margin 1em auto;
    max-width: 100%;
    min-height: 350px;
  }
`
const Template = ({data, pageContext}) => {
  const {next, previous } = pageContext;
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
    return (
      <>
      <Layout>
          <SEO title={markdownRemark.frontmatter.title} description={markdownRemark.excerpt} />
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
        <Div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
        <div css={css`
        position: relative;
        top: 2em;
        color: blue;
        margin-bottom: 2em;
        `}>
            <ul
              style={{
                position: `relative`,
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.frontmatter.path} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
              </Link>
                )}
              </li>
            </ul>
        </div>
    </Layout>
      <Footer />
    </>
  )
}
export default Template;

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