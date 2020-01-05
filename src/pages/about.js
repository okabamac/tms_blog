import React from "react";
import styled from '@emotion/styled';
import Layout from "../components/Layout";
import introductionImg from "../../static/images/feature-icon-01.svg";
import purposeImg from "../../static/images/feature-icon-02.svg";
import visionImg from "../../static/images/feature-icon-03.svg";

const Div = styled.div`
line-height: 1.5;
margin-bottom: 1em;
word-break: break-word;
overflow-x: hidden;
`
const style = {
    width: "30px",
    height: "30px",
    marginLeft: "0.25em",
    marginBottom: "-0.2em",
};
export default () => {
    return (
        <Layout>
            <section>
            <Div>
                <h2>Introduction <img alt="Introduction" style={style} src={introductionImg}/></h2>
                <p>The Mystery of Sound is a ministry that is built on God's instruction to Rebuild,
                    Renew and Return people's heart and mind back to the real essence of "Sound and Music.
                    We also are working daily in impacting and raising a generation of people who's mind will
                    be continually fixed on God to easily bring this desired change and transformation needed.
                    We are teaching people to be music-allies and to understand the effect and efficacy of
                    sound as the preceding factor in all things. God is our strength. We are just vessels
                    unto honor to do His will. What a privilege and honor we found in Him. Amen.</p>
            </Div>
            <Div>
                    <h2>Purpose <img alt="Purpose" style={style} src={purposeImg} /></h2>
                <p>
                    To Rebuild, Renew and Return people's minds back to the real essence of sound and music
                    by accurate teaching of the deep realities of God in the subject matter.
                </p>
            </Div>
            <Div>
                    <h2>Vision <img alt="Vision" style={style} src={visionImg} /></h2>
                <p>
                    To raise a generation of people who's mind will be continually fixed on GOD to bring about t
                    he desired change and transformation needed in the music world for the kingdom
                    by first being music-allies, and to teach the effect and efficacy of sound as the
                    preceding factor in all things. Amen LORD Jesus.
                </p>
            </Div>
            </section>
       </Layout>
    )
}
