//used for client-side web requests
import axios from 'axios';
//Used for react function component's implementation of state
import { useState } from 'react';
//css-in-js
import styled from 'styled-components';
//Custom react "theme" for consistent "layout"
import Layout from '../../components/layout-components/layout';

function Stream () {

    /* CLIENT-SIDE JS */

    //Init formData var & update func with useState
    const [formData, setFormData] = useState({
        fname: "",
        ign: "",
        tel: ""
    });

    /* POSTs FormData to Streamer Signup API endpoint */
    async function handleSubmit (event) {
        event.preventDefault(); //Stops default form submission
        const errText = document.getElementById("signup-err"); //Shown on Error
        errText.classList.add("hidden");

        const successText = document.getElementById("signup-success"); //Shown on success
        successText.innerHTML = "Loading...";
        successText.classList.remove("hidden");

        await setTimeout(async () => {
            if(formData.fname && formData.ign){

                //POST DATA
                await axios.post(`/api/users/streamer-signup`, formData)
                .then((res) => {
                    console.log(res);

                    //Uses the success var sent in res from server to determine status
                    if(res.data.success == true) {
                        //Shows success text & hides error text if need be\
                        successText.innerHTML = res.data.response;
                        successText.classList.remove("hidden");
                        if(!errText.classList.contains("hidden")) errText.classList.add("hidden");
                    }

                    else if(res.data.success == false && res.data.response) {
                        //Shows Error text & updates contents, Hides success text if need be
                        errText.innerHTML = res.data.response;
                        errText.classList.remove("hidden");
                        if(!successText.classList.contains("hidden")) successText.classList.add("hidden");
                    }

                    else {
                        //Generic Error message if a success status var is unable to be parsed
                        console.log(res);
                        errText.innerHTML = "Error! Server did not respond properly."
                        errText.classList.remove("hidden");
                        if(!successText.classList.contains("hidden")) successText.classList.add("hidden");
                    }
                })
                .catch(err=> {
                    //Handles Axios error when unable to post, shows generic error
                    console.log(err)
                    errText.innerHTML = "Error! Server did not respond."
                    errText.classList.remove("hidden");
                    if(!successText.classList.contains("hidden")) successText.classList.add("hidden");
                });
            }
            else {
                errText.innerHTML = "Please fill out the required fields.";
                errText.classList.remove("hidden");
                if(!successText.classList.contains("hidden")) successText.classList.add("hidden");
            }
        }, 100);
    }
    
    /* Form Update Handlers */ //TO-DO: Make below more compact (1 function > 3)
    function handleNameChange (event) {
        setFormData({
            fname: event.target.value,
            ign: formData.ign,
            tel: formData.tel
        })
    }
    function handleIGNChange (event) {
        setFormData({
            fname: formData.fname,
            ign: event.target.value,
            tel: formData.tel
        })
    }
    function handleTelChange (event) {
        setFormData({
            fname: formData.fname,
            ign: formData.ign,
            tel: event.target.value
        })
    }


    /* COMPONENT HTML-IN-JS (JSX)*/
    return(
        <Layout>
            <ContentWrapper>
                <ImageWrapper>
                    <Richie src="/home/richie.svg"></Richie>
                </ImageWrapper>
                <SignUpWrapper>
                    <PageTitle>Like to Stream?</PageTitle>
                    <PageExceprt>Sign Up now to let viewers take control of your game!</PageExceprt>
                    <Form onSubmit={handleSubmit}>

                        {/* Full Name */}
                        <Label htmlFor="fname">Full (legal) name: <span>*</span></Label><br/>
                        <Input type="text" id="fname" name="fname" autocomplete="off" value={formData.fname} onChange={handleNameChange}></Input><br/>

                        {/* MC IGN */}
                        <Label htmlFor="ign">Minecraft IGN: <span>*</span></Label><br/>
                        <Input type="ign" id="ign" name="ign" value={formData.ign} onChange={handleIGNChange}></Input><br/>

                        {/* Telephone Number */}
                        <Label htmlFor="tel">Phone number:</Label><br/>
                        <Input type="tel" id="tel" name="tel" placeholder="Optional" value={formData.tel} onChange={handleTelChange}></Input>

                        <SignUpButton type="submit"><SignUpText>SIGN UP</SignUpText></SignUpButton>

                        {/* Status Text handled by JS */}
                        <ResponseErr id="signup-err" className="hidden">Error!</ResponseErr>
                        <ResponseSuccess id="signup-success" className="hidden">Success!</ResponseSuccess>
                    </Form>
                </SignUpWrapper>
            </ContentWrapper>
        </Layout>
    );
}

/* STYLING (CSS) */

/* PAGE LAYOUT */
const ContentWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    z-index: 1;

    display: flex;
    background-color: white;

`;

const ImageWrapper = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media only screen and (max-width: 1400px) {
        display: none;
    }
`;

const SignUpWrapper = styled.div`
    flex: 2;
    background-color: #101824;
    height: 100vh;

    display: flex;
    flex-direction: column;
    padding: 25px;

    box-shadow: -4px 0px 6px 1px rgba(0, 0, 0, 0.35);

    @media only screen and (max-width: 1400px) {
        box-shadow: none;
        flex: 1;
        display: block;
        margin: 0 auto;
    }
`;



/* PAGE CONTENT */
const Richie = styled.img`
    height: 50%;
    min-width: 600px;
    max-width: 100%;
    padding-left: 20px;

    @media only screen and (max-width: 1400px) {
        display: none;
    }
`;
const PageTitle = styled.h3`
    color: white;
    font-weight: 800;
    font-size: 80px;

    margin: 0 auto;
    text-align: center;

    @media only screen and (max-width: 1400px) {
        font-size: 60px;
    }
`;
const PageExceprt = styled.p`
    font-size: 24px;
    color: #C4C4C4;

    margin: 0 auto;
    text-align: center;
`;



/* SIGNUP FORM */
const Form = styled.form`
    width: 25vw;
    height: auto;
    margin: 50px auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 0px 0px 3px #F0524C;
    border-radius: 8px;

    @media only screen and (max-width: 1400px) {
        width: 75%;
    }
`;
const Input = styled.input`
    margin: 10px auto;
    border-radius: 5px;
    height: auto;
    min-height: 30px;
    width: 50%;
    min-width: 250px;
    border: none;
    outline: none;
    padding-left: 10px;
    @media only screen and (max-width: 1400px) {
        height: 5vh
    }
`;
const Label = styled.label`
    margin-top: 20px;

    font-family: 'Montserrat', sans-serif;
    font-size: 1em;

    color: white;

    span {
        color: red;
    }
`;



/* FORM RESPONSE TEXT */
const ResponseErr = styled.p`
    color: red;
    font-size: 16px;
    margin: 10px 20px;
`;
const ResponseSuccess = styled.p`
    color: green;
    font-size: 16px;
    margin: 10px 20px;
`;



/* SIGN UP BUTTON */
const SignUpButton = styled.button`
    height: 60px;
    width: 150px;
    margin: 20px 10px;
    padding: 0 25px;

    background: #F0524C;
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    
    border: none;

    cursor: pointer;

    :hover {
        box-shadow: 0px 0px 0px 3px #F0524C;
        background: none;
        transition: 150ms;
    }

    @media only screen and (max-width: 1400px) {
        margin: 20px 0;
    }
    
    transition: 150ms;
    `;

const SignUpText = styled.h5`
    font-size: 18px;
    margin: 0 auto;
`;
export default Stream;