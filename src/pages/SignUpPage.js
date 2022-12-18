import { Link } from "react-router-dom"
import styled from "styled-components"
//import { ThreeDots } from "react-loader-spinner";
import logo from "../assets/logo.png"
import SignUp from "../components/SignUp"

export default function SignUpPage() {
    return (
        <>
            <Container>
                <img src={logo} alt="Logo TrackIt" />
                <SignUp/>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 68px 36px;
    background-color: #FFFFFF;
    img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        margin-bottom: 33px;
    }
    p {
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        margin-top: 25px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`