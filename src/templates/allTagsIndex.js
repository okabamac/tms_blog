import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import SEO from '../components/SEO';
import Layout from "../components/Layout";

const AllTagsTemplate = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.group
    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`music`, `sound`, `rhythm`, `keys`]}
        />
                <h1>Tags</h1>
                <ul>
                    {tags.map(tag => (
                        <li css={css`
                            display: block;
                            display: list-item;
                            list-style: square;
                            color: blue;
                            margin: 1.5em;
                            `} key={tag.fieldValue}>
                            <Link css={css`
                                margin-left: -0.7em;
                                `} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
        </Layout>
    )
}

export default AllTagsTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
