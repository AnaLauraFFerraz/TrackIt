import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"

export default function TodayPage() {

    return (
        <>
            <Header />
            <Container>
                <h3>Hoje, 18/12</h3>
                <p>
                    Nenhum hábito concluído ainda
                </p>
            </Container>
            <Menu />
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 70px 15px;
    background: #EBEBEB;
    width: 100vw;
    height: 100vh;
    h3 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    };
    p {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
    }
`