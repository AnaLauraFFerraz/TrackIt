import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"

export default function HistoricPage() {

    return (
        <>
            <Header />
            <Container>
                <h3>Histórico</h3>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
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
        font-size: 22.976px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 17px;
    };
    p {
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`