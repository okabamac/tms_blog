import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import Layout from "../components/Layout";

const AllTagsTemplate = ({ data, pageContext }) => {
    const tags = data.allMarkdownRemark.group;
    return (
        <Layout>
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
