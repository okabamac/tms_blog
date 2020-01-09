import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import styled from '@emotion/styled';
import { Link } from "gatsby";
import "../../static/styles/index.css";
import visualizer from "../../static/images/visualizer.svg";
import Layout from "../components/Layout";
import SEO from "../components/SEO";


const ListSocial = styled.li
  `
   transition: all 200ms ease-in-out;
    &:hover {
      font-size: 110%;
      &:nth-child(1) {
        color: #0166c4;
      }
      &:nth-child(2) {
        color: #4d97ff;
      }
      &:nth-child(3) {
        color: #f12711;
      }
    }
    a {
      margin: 0.2em;
    }
  `
const ListMenu = styled.li
  `
   transition: all 200ms ease-in-out;
    &:hover {
      color: #f12711;
    }
  `

export default (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle}
        keywords={[`music`, `sound`, `rhythm`, `keys`]}
      />
      <div css={css`
                position: absolute;
                top: 0;
                height: 60px;
                width: 100vw;
                -webkit-box-shadow: 5px 2px 3px 2px #777473;
                box-shadow: 5px 2px 3px 2px #777473;
                background: #f12711;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

              `}></div>
      <div css={css`
                position: relative;
                color: inherit;
              `}>
           <div css={css`
           display: inline-block;
           width: 100vw;
           `}>
          <div css={css`
                position: relative;
                border-radius: 5px 350px 1px 350px;
                background: #f12711;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                width: 5em;
                height: 12em;
                display: inline-block;
                margin-right: -1.7em;
                transform: rotate3d(1, 2, 1.5, 65deg);
                `}></div>
          <div css={css`
                position: relative;
                border-radius: 5px 300px 3px 300px;
                background: #f12711;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                width: 2em;
                height: 4.5em;
                display: inline-block;
                transform: rotate3d(1, 2, 1.5, 60deg);
                `}></div>
          <div css={css`
          display: inline-block;
          margin-left: 0.2em;
        `}>
          <img alt="Audio Visualizer" src={visualizer} css={css`
            margin: 0 0 -2.2em 0.55em;
          `}/>
          <h1 css={css`
          font-size: 5em;
          margin-bottom: -7px;
          `}>TMS</h1>
            <p>The Mystery of Sound</p>
        </div>
           </div>
        <section>
          <ul className="home-menu">
            <ListMenu>
              <Link to='/about'>About</Link>
            </ListMenu>
            <ListMenu>
              <Link to='/blog'>Blog</Link>
            </ListMenu>
            <ListMenu>
              <Link to='/contact'>Contact</Link>
            </ListMenu>
          </ul>
        </section>
      </div>
      <section css={css`
        position: absolute;
        top: 85vh;
        font-size: 1.2em;
        width: 100vw;
        `}>
        <ul>
          <ListSocial>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </ListSocial>
          <ListSocial>
            <Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </ListSocial>
          <ListSocial>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </ListSocial>
        </ul>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
