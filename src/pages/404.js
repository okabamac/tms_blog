import React from "react";
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";


const Div = styled.div`
line-height: 2;
margin-bottom: 1em;
font-size: 110%;
padding-top: 3em;
word-break: break-word;
overflow-x: hidden;
`
export default ({data}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout>
            <SEO title="404: Not Found" />
            <section>
                <Div>
                   <h1>Page not found</h1>
                   <p>Oops! The page you're looking for has been removed or relocated</p>
                   <p>
                       <Link to="/">
                       Go back
                       </Link>
                   </p>
                </Div>
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
