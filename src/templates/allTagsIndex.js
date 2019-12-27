import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"

const AllTagsTemplate = ({ data , pageContext}) => {
    const { tags } = pageContext;
    return (
        <div>
            <div>
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link to={`tags/${tagName}`}>
                                    {tagName}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AllTagsTemplate
