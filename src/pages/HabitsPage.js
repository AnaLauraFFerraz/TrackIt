import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"

export default function HabitsPage() {

    return (
        <>
            <Header />
            <Content>
                <h3>Meus Hábitos</h3>
                <NewHabit>
                    <button>+</button>
                </NewHabit>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </Content>
            <Menu />
        </>
    )
}

const Content = styled.div`
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
const NewHabit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 92px;
    right: 18px;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    z-index: 2;
    button {
        border: none;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
    }
`