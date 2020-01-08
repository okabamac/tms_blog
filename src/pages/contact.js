import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";

const Div = styled.div`
line-height: 1.5;
position: relative;
word-break: break-word;
display: block;
margin-bottom: 1.2em;
width: 100%;
padding: 0.4em;
input {
    outline: none;
    width: 100%;
    height: 38px;
    font-family: "Philosopher";
    padding: 0.4em;
}
textarea {
    outline: none;
    width: 100%;
    padding: 1em 0.4em;
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
input:valid+label,
textarea:focus+label,
textarea:valid+label {
    transform: translate3d(-3%, -97%, 0);
    opacity: 1;
    font-size: 105%;
}
button {
    font-family: "Philosopher";
    position: absolute;
    top: -1em;
    border: none;
    border-radius: 2px;
	box-shadow: 0 2px 2.5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 1em;
    color: #333;
    font-weight: 700;
    color: #fff;
    width: 40%;
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

const Feedback  = styled.section `
                    position: relative;
                    width: 100%;
                    min-height: 45vh;
                    font-size: 120%;
                    position: relative;
                    width: 100%;
                    min-height: 40vh;
                    font-size: 120%;
                    padding: 5em 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    svg {
                    animation: submitResultShow 1s ease-in-out;
                    animation-fill-mode: forwards;
                    }
                    @keyframes submitResultShow {
                    0% {
                        transform: scale(2);
                        opacity: 0.2;
                        }
                    70% {
                        transform: scale(0.7);
                        opacity: 0.6;
                        }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                        }
                    }
`

const Contact = () => {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitResult, setSubmitResult] = useState(undefined);
    const [btnAnimation, setBtnAnimation] = useState(false);
    // const btnDiv = btnAnimation ? "addBg" : "";
    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnAnimation(true);
        const formDetails = { name: formFields.name, email: formFields.email, message: formFields.message };
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formDetails }),
            });
            if (res) {
                setBtnAnimation(false);
                setSubmitResult({
                    success: true,
                    message: "Thanks for contacting us!",
                });
                setFormFields({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (err) {
            setBtnAnimation(false);
            setSubmitResult({
                success: false,
                message: "Oops! Something isn't right, please try again later",
            });
        }
        // if (this.validateForm()) {
        //     const submitSuccess: boolean = await this.submitForm();
        //     this.setState({ submitSuccess });
        // }
        e.persist();
    };
    const updateField = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <Layout>
            {submitResult ? (
                submitResult.success ? <Feedback>
                    <span><FontAwesomeIcon icon={faCheck} /><br />{submitResult.message}</span>
                    </Feedback>
                    :
                    <Feedback>
                        <span><FontAwesomeIcon icon={faWindowClose} /><br />{submitResult.message}</span>
                        </Feedback>

            )
            :  <section>
                <Div>
                    <h2>Contact Us</h2>
                </Div>
                    <form onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true">
                        <Div>
                        <input type="hidden" name="bot-field" />
                        </Div>
                    <Div>
                        <input
                            type="text"
                            value={formFields.name}
                            name="name"
                            required
                            onChange={updateField}
                        />
                        <label htmlFor="name">Name</label>
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
                        <textarea rows={9}
                            name="message"
                            required
                            value={formFields.message}
                            onChange={updateField}
                        />
                        <label htmlFor="message">Message</label>
                    </Div>
                    <Div>
                        <button disabled={btnAnimation} className="send-btn">{btnAnimation ? "SENDING..." : "SEND"}</button>
                    </Div>
                </form>
            </section>
        }
        </Layout>
    )
}

export default Contact;
