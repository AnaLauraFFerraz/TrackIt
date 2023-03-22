import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components"
import logo from "../assets/logo.png"
import { UserContext } from "../UserContext";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const urlLogin = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body = { email: email, password: password };

        const promise = axios.post(urlLogin, body);
        promise.then((res) => {
            setUser(
                {
                    id: res.body.id,
                    name: res.body.name,
                    image: res.body.image,
                    email: res.body.email,
                    token: res.body.token,
                },
            );
            console.log(user);
            navigate("/hoje");
        });
        promise.catch((err) => {
            console.log("ERR Login: ", err)
            setLoading(false);
            alert("Erro ao fazer login");
        });
    }

    return (
        <Container>
            <img src={logo} alt="Logo TrackIt" />
            <Form onSubmit={() => handleSubmit()} disabled={loading}>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                />
                <button type="submit">
                    {
                        loading ? <ThreeDots
                            width="60"
                            height="15"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            visible={true}
                        /> : "Entrar"
                    }
                </button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
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
        width: 180px;
        margin-bottom: 33px;
    }
    p {
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        margin-top: 25px;
        color: #52B6FF;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    input {
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 6px;
        background-color: #FFFFFF;
        &::placeholder{
            height: 25px;
            color: #D4D4D4;
            font-size: 20px;
        }
        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
        }
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45px;
        border: none;
        border-radius: 5px;
        background-color: #52B6FF;
        font-size: 21px;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
        }
        &:disabled{
            opacity: 0.7;
        }
    }
`
