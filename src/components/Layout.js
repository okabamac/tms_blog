import React from "react";
import Nav from "./Nav";
import { css } from "@emotion/core";

export default ({ children }) => (
    <>
    <Nav />
        <section css={css`
        position: relative;
        min-height: 100vh;
        max-width: 600px;
        padding: 100px 0.5em 0 0.5em;
        margin: 0 auto;
        background-color: #fff;
        `}>
            {children}
            {/* <footer>
                © {new Date().getFullYear()}, Built with
          {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer> */}
        </section>
    </>
)
