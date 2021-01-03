import styled from 'styled-components';

export default function Login (props) {
    return(
        <Container>
            <LoginWrapper>
                <Form autoComplete="off" method="POST" action="/command" className="" id="loginForm">
                    <h3>CMD Sender</h3>
                    <label htmlFor="command">Command</label><br />
                    <input type="text" name="command"></input><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password"></input>
                    <button type="submit">Send Command</button>
                </Form>
            </LoginWrapper>
            <RegisterWrapper>
                <Form autoComplete="off" method="POST" action="/register" className="hidden" id="registerForm">
                    <h3 onClick={setLoginActive}>Register</h3>
                    <label htmlFor="name">Full Name</label><br />
                    <input type="text" name="name"></input><br />
                    <label htmlFor="pronoun">Pronouns</label><br />
                    <select id="pronoun" name="pronoun">
                        <option value="him">He/Him</option>
                        <option value="her">She/Her</option>
                        <option value="them">They/Them</option>
                    </select>
                    <label htmlFor="username">E-Mail</label><br />
                    <input type="email" name="username"></input>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password"></input>
                    <button type="submit">Register</button>
                </Form>
            </RegisterWrapper>
            <WelcomeMessage>
                <h3>Welcome to</h3>
                <h1>UTHD MC!</h1>
            </WelcomeMessage>
        </Container>
    );
}

/* Styling */
const Container = styled.div`
    background-size: fill;
    background-color: #1F2937;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    z-index: -1;

    @media only screen and (max-width: 650px) {
        margin: auto;
        padding: 0;
        justify-content: center;
        background-color: none;
        background-attachment: fixed;
    }
`;

const LoginWrapper = styled.div`

`;

const RegisterWrapper = styled.div`

`;

const WelcomeMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    flex-wrap: wrap;


    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 45px;
        translateY(-50%);
        padding: 10px;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 80px; 
        padding: 10px;
    }
    @media only screen and (max-width: 650px) {
        display: none;
        flex: 0;
    }
`;

const Form = styled.form`
    margin: 15px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: center;

    flex: 1;
    min-width: 400px;
    min-height: 550px;
    height: calc(100vh - 30px);

    rgb(209, 213, 219);
    box-shadow: 3px 0px 4px rgba(124, 124, 124, 0.45);
    border-radius: 10px;

    @media only screen and (max-width: 650px) {
        height: 100vh;
        width: 100%;
        background: none;
        box-shadow: none;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 65px;
    }

    input {
        width: 80%;
        margin: 5px 10% 20px 10%;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        transition: 300ms;
    }
    input:focus {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
        transition: 300ms;
    }
    input:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 300ms;
    }
    
    label {
        text-align: left;
        margin: 0 0 5px 0;
        padding: 0 10%;

        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    select {
        width: 80%;
        margin: 5px 10% 20px 10%;

        border-radius: 10px;
        padding: 10px;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        transition: 300ms;
        border: none;
    }

    select:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        transition: 300ms;
    }

    button[type=submit] {
        width: 50%;
        margin: auto;
        
        padding: 10px;

        border-radius: 15px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

        background-color: #60A5FA;

        font-family: 'Montserrat', sans-serif;
        font-weight: 500;

        transition: 300ms;
    }
    button[type=submit]:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
        transition: 300ms;
        cursor: pointer;
    }
    a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 18px;
        margin: 10px 0 25px 0;
        cursor: pointer;
        flex: .25;
    }
    transition: 300ms;
`;
const FormSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;

    margin: 0 auto 25px auto;

    input[type=radio] {
    }
`;

function setRegisterActive () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
}
function setLoginActive () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
}