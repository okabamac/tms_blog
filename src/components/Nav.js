import React from "react";
import  { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from '@emotion/styled';
import { Link } from "gatsby";

const ListMenu = styled.li
  `
    background: linear-gradient(to right, #f24515 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-out;
    margin-top: -0.4em;
    padding: 0.5em;
    &:hover {
        background-position: left bottom;
    }
    a {
        margin: 0.2em;
    }
  `
const Nav = ({ data }) => {
    return (
        <div css={css`
                position: absolute;
                top: 0;
                padding: 1em 0.5em;
                height: 50px;
                width: 100vw;
                -webkit-box-shadow: 5px 2px 3px 2px #777473;
                box-shadow: 5px 2px 3px 2px #777473;
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
                       <FontAwesomeIcon icon={faHome}/> TMS
            </h3>
            </Link>
                <ul css={css`
                position: absolute;
                display: inline-block;
                right: 1em;
                `}>
                    <ListMenu>
                        <Link to='/blog' activeStyle={{ textDecoration: "underline" }}>
                        Blog
                       </Link>
                    </ListMenu>
                    <ListMenu>
                        <Link to='/about' activeStyle={{ textDecoration: "underline" }}>
                        About
                       </Link>
                    </ListMenu>
                    <ListMenu>
                        <Link to='/contact' activeStyle={{ textDecoration: "underline" }}>
                        Contact
                       </Link>
                    </ListMenu>
                </ul>
            </div>
        </div>
    )
}

export default Nav
