import { useContext } from "react";
import styled from "styled-components"
import { UserContext } from "../UserContext";
import trackIt from "../assets/TrackIt.png"

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <img src={trackIt} alt="TrackIt" />
            <Profile src={user.image} />
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    width: 100vw;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 9px 18px;
    box-sizing:border-box;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img {
        width: 97px;
    }
`
const Profile = styled.div`
    width: 51px;
    border-radius: 98.5px;
    border: none;
`