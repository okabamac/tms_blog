import Nav from "./Nav";
import { css } from "@emotion/core";
import React from 'react'
import { Link } from 'gatsby'

const Layout = (props) => {
        const { location, title, children } = props
        const isRootPath = location.pathname === `${__PATH_PREFIX__}/`
    console.log(isRootPath);
        const pageNumber = location.pathname
            .split('/')
            .filter(Boolean)
            .pop()
        // const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/))
        // let header

        // if (isRootPath || isPaginatedPath) {
        //     header = (
        //         <h1
        //             style={{
        //                 marginTop: 0,
        //             }}
        //         >
        //             <Link
        //                 style={{
        //                     boxShadow: `none`,
        //                     textDecoration: `none`,
        //                     color: `inherit`,
        //                 }}
        //                 to={`/`}
        //             >
        //                 {title}
        //             </Link>
        //         </h1>
        //     )
        // } else {
        //     header = (
        //         <h3
        //             style={{
        //                 fontFamily: `Montserrat, sans-serif`,
        //                 marginTop: 0,
        //             }}
        //         >
        //             <Link
        //                 style={{
        //                     boxShadow: `none`,
        //                     textDecoration: `none`,
        //                     color: `inherit`,
        //                 }}
        //                 to={`/`}
        //             >
        //                 {title}
        //             </Link>
        //         </h3>
        //     )
        // }
        return (
        <>
        { isRootPath ? <div css={css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
      justify-content: center;
      font-size: calc(5px + 2vmin);
    `}>
        {children}
            </div> :
            (<div>
            <Nav />
            <div css={css`
            position: relative;
            min-height: 100vh;
            max-width: 600px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 100px 0.5em 4em 0.5em;
            margin: 0 auto;
            background-color: #fff;
            `}

            >
                {children}
                <footer css={css`
                    position: absolute;
                    bottom: 1em;
                `}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </div>
            )}
            </>
        )
    }

export default Layout