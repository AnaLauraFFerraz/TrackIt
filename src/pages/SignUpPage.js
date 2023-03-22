import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function SignUpPage() {

    const [signupData, setSignupData] = useState({});
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        image: '',
    });
    const navigate = useNavigate();


    function registerUser(e) {
        e.preventDefault();
        setLoading(true);

        const urlSignUp = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body = {
            email: form.email,
            name: form.name,
            image: form.image,
            password: form.password
        };

        const promise = axios.post(urlSignUp, body);
        promise.then((res) => {
            setSignupData(res.body);
            console.log(signupData)
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        });
        promise.catch((err) => {
            alert("Erro ao fazer o cadastro");
            setLoading(false);
        });
    }

    return (
        <>
            <Container>
                <img src={logo} alt="Logo TrackIt" />
                <Form>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={form.email}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={form.password}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }}
                        required
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={form.name}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }}
                        required
                    />
                    <input
                        type="url"
                        id="image"
                        name="image"
                        placeholder="foto"
                        value={form.image}
                        onChange={(e) => {
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }}
                        required
                    />
                    <button type="submit" onSubmit={() => registerUser()} disabled={loading}>
                        {
                            loading ? <ThreeDots
                                height="15"
                                width="60"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                visible={true}
                            /> : "Cadastrar"
                        }
                    </button>
                </Form>
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
