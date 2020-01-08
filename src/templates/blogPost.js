import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { DiscussionEmbed } from "disqus-react"
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
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: markdownRemark.frontmatter.path, title: markdownRemark.frontmatter.title },
  }
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
            <ul css={css`
            position: relative;
            color: #333;
            list-style: none;
            padding: 0.5em 0;
            width: 100%;
            margin-bottom: 2em;
            `}>
              <li css={css`
              position: absolute;
              left: -1em;
              line-height: 1.5;
              text-align: left;
              `}>
                {previous && (
                  <>
                    <p>Previous</p>
                    <Link css={css`color: blue`} to={previous.frontmatter.path} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  </>
                )}
              </li>
              <li css={css`
              position: absolute;
              right: 0;
              line-height: 1.5;
              text-align: right;
              `}>
                {next && (
                  <>
                    <p>Next</p>
                    <Link css={css`color: blue`} to={next.frontmatter.path} rel="next">
                      {next.frontmatter.title} →
              </Link>
              </>
                )}
              </li>
            </ul>
        </div>
    </Layout>
      <Footer />
      {/* <DiscussionEmbed {...disqusConfig} /> */}
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