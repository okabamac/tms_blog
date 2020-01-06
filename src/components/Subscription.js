import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
line-height: 1.5;
position: relative;
margin-bottom: 0.5em;
word-break: break-word;
display: block;
width: 100%;
padding: 0.4em;
input {
    outline: none;
    width: 100%;
    height: 38px;
    font-family: "Philosopher";
    padding: 0.4em;
}
label {
    position: absolute;
    top: 0.5em;
    left: 0;
    padding-left: 0.7em;
    transition: all 200ms;
    opacity: 0.6;
}
input:focus+label,
input:valid+label {
    transform: translate3d(-3%, -97%, 0);
    opacity: 1;
    font-size: 105%;
}
button {
    font-family: "Philosopher";
    position: relative;
    border: none;
    border-radius: 2px;
	box-shadow: 0 2px 2.5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 1em;
    color: #333;
    font-weight: 700;
    color: #fff;
    width: 100%;
    background: -webkit-linear-gradient(to right, #F37335, #FDC830, rgb(27,27,27) 50%);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F37335, #FDC830, rgb(27,27,27) 50%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-out;
  &:hover {
    background-position: left bottom;
    color: #333;
    }
 button:focus {
    outline: 0;
    }
}
`
const Section = styled.section`
        position: absolute;
        top: 7em;
        padding-top: 2em;
        right: 4em;
        width: 250px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        @media (max-width: 1024px) {
        position: relative;
        top: -1em;
        left: 0.1em;
        }
`
const Footer = ({ data }) => {
    const [formFields, setFormFields] = useState({
        email: "",
    });
    const [submitResult, setSubmitResult] = useState(undefined);
    const [btnAnimation, setBtnAnimation] = useState(false);
    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnAnimation(true);
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "subscription", ...formFields.email }),
            });
            if (res) {
                setBtnAnimation(false);
                setSubmitResult({
                    success: true,
                    message: "Thanks for subscribing!",
                });
                setFormFields({
                    email: "",
                });
            }
        } catch (err) {
            setBtnAnimation(false);
            setSubmitResult({
                success: false,
                message: "Oops! Something isn't right, please try again later",
            });
        }
        e.persist();
    };
    const updateField = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
        {
            submitResult ? (
                submitResult.success ? <Section>
                    <span><FontAwesomeIcon icon={faCheck} /><br />{submitResult.message}</span>
                </Section>
                    :
                    <Section>
                        <span><FontAwesomeIcon icon={faWindowClose} /><br />{submitResult.message}</span>
                    </Section>

            )
            :
        <Section>
            <form onSubmit={handleSubmit}>
                <Div>
                    <h4>Keep up to date with recent posts</h4>
                </Div>
                <Div>
                    <input
                        type="email"
                        value={formFields.email}
                        name="email"
                        required
                        onChange={updateField}
                    />
                    <label htmlFor="email">Email</label>
                </Div>
                <Div>
                    <button disabled={btnAnimation} className="send-btn">{btnAnimation ? "Subscribing..." : "Subscribe"}</button>
                </Div>
            </form>
        </Section>
        }
        </>
    )
}

export default Footer
