import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"

const SingleTagTemplate = ({ data, pageContext }) => {
    const { posts, tagName  } = pageContext;
    return (
        <div>
           <h3>
               Posts about "{`${tagName}`}"
           </h3>
        <div>
            <ul>
                {posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <Link to={post.frontmatter.path}>
                                {post.frontmatter.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}

export default SingleTagTemplate
