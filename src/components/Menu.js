import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Menu() {

    return (
        <>
            <Container>
                <div>
                    <Link to="/habitos" >
                        <NavButtons>Hábitos</NavButtons>
                    </Link>
                    <Link to="/historico" >
                        <NavButtons>Histórico</NavButtons>
                    </Link>
                </div>
            </Container>
            <TodayContainer>
                <Link to="/hoje" >
                    <TodayButton>Hoje</TodayButton>
                </Link>
            </TodayContainer>
        </>
    )
}

const Container = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    justify-content: space-between;
    z-index:1;
`
const NavButtons = styled.button`
    width: 50vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 17.976px;
    line-height: 22px;
    background-color: #FFFFFF;
    color: #52B6FF;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
`
const TodayContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 91px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -46px;
    background: #52B6FF;
    color: #FFFFFF;
    z-index:2;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    border-radius: 300px;
`
const TodayButton = styled.button`
    background: #52B6FF;
    color: #FFFFFF;
    z-index:2;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    border-radius: 300px;
`