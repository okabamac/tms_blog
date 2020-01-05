import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/Layout";

const SingleTagTemplate = ({ data, pageContext }) => {
    const { posts, tagName  } = pageContext;
    console.log(pageContext);
    return (
        <Layout>
        <div>
                <h3 css={css`
                            margin-bottom: 2em;
                            `}>
               Posts about "{`${tagName}`}"
           </h3>
        <div>
            <ul>
                {posts.map((post, index) => {
                    return (
                        <li css={css`
                            display: block;
                            display: list-item;
                            list-style: square;
                            color: blue;
                            margin: 1.5em;
                            `} key={index}>
                            <Link css={css`
                                margin-left: -0.7em;
                                `} to={post.frontmatter.path}>
                                {post.frontmatter.title} - <span css={css`
                                color: #333;
                                opacity: 0.4;
                                `}>
                                    {post.frontmatter.date}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    </Layout>
    )
}

export default SingleTagTemplate
