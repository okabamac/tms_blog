import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";

const Nav = ({ data }) => {
    return (
        <div css={css`
                position: absolute;
                top: 0;
                padding: 1em 0.5em;
                height: 50px;
                width: 100vw;
                z-index: 1000;
                font-weight: 700;
                background: #f12711;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        `}>
            <div css={css`
            position: relative;
            max-width: 600px;
            margin: 0 auto;
            color: #fff;
            `}>

            <Link to='/'>
                    <h3 css={css`
                position: relative;
                color: #fff;
                display: inline-block;
                left: 0;
            `}>
                        TMS
            </h3>
            </Link>
                <ul css={css`
                position: absolute;
                display: inline-block;
                right: 1em;
                `}>
                    <li>
                        <Link to='/blog' activeStyle={{ textDecoration: "underline" }}>
                        Blog
                       </Link>
                    </li>
                    <li>
                        <Link to='/about' activeStyle={{ textDecoration: "underline" }}>
                        About
                       </Link>
                    </li>
                    <li>
                        <Link to='/contact' activeStyle={{ textDecoration: "underline" }}>
                        Contact
                       </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
