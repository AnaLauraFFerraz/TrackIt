import styled from "styled-components"
//import { ThreeDots } from "react-loader-spinner";

export default function Login() {

    return (
        <>
            <form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
                <Button type="submit">Entrar</Button>
            </form>
        </>
    )
}

const Input = styled.input`
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
`
const Button = styled.button`
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
`