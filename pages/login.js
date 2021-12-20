import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import {signInWithPopup} from "firebase/auth"

function login() {

    const signIn = () => {
        signInWithPopup(auth , provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title> Login </title>
            </Head>

            <LoginContainer>
                <Logo
                    src = ""
                />
                <Button onClick = {signIn} variant = "outlined"> Sign In With Google </Button>
            </LoginContainer>
        </Container>
    )
}

export default login;

const Container = styled.div`
    display: grid;
    height: 100vh;
    place-items: center;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 100px;
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;