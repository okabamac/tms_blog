import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { css } from "@emotion/core"
import { Link } from "gatsby"
import '../../static/styles/index.css'
import visualizer from '../../static/images/visualizer.svg';

export default () => {
  return (
    <main css={css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
      justify-content: center;
      font-size: calc(5px + 2vmin);
    `}>
      <div css={css`
                position: absolute;
                top: 0;
                height: 60px;
                width: 100vw;
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
          <img src={visualizer} css={css`
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
          <ul className="home-menu" css={css`
            list-style-type: none;
            margin-top: 2.5em;
          `}>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </section>
      </div>
      <section css={css`
        position: absolute;
        bottom: 10px;
        font-size: 1.2em;
        width: 100vw;
        `}>
        <ul>
          <li>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
