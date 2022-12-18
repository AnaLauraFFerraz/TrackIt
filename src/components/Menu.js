import styled from "styled-components"
import HabitsPage from './pages/HabitsPage'
import TodayPage from './pages/TodayPage'
import HistoryPage from './pages/HistoryPage'
import { Link } from "react-router-dom"

export default function Menu() {

    return (
        <Container>
            <Link>
                <NavButtons>Hábitos</NavButtons>
            </Link>
            <Link>
                <TodayButton>Hoje</TodayButton>
            </Link>
            <Link>
                <NavButtons>Histórico</NavButtons>
            </Link>
        </Container>
    )
}

const Container = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    justify-content: space-between;
    height: 70px;
`
const NavButtons = styled.button`
    align-items: center;
    justify-content: center;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
`
const TodayButton = styled.button`
    align-items: center;
    justify-content: center;
    background: #52B6FF;
    color: #FFFFFF;
`
