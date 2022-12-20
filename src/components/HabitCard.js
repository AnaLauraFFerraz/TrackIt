import { useState } from "react";
import styled from "styled-components"

export default function HabitCard({ habit, weekdays }) {

    const [isSelected, setIsSelected] = useState(false);

    function handleDays() {
        weekdays.map((day) => {
            habit.days.includes(day) ?? setIsSelected(true)
            return (
                <Day isSelected={isSelected}>{day}</Day>
            )
        })
    }

    return (
        <Card>
            <p>{habit.name}</p>
            <Days>
                {handleDays()}
            </Days>
            <ion-icon name="trash-outline"></ion-icon>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    width: 100vw;
    min-width: 340px;
    min-height: 91px;
    padding: 11px 11px 15px 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    p {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    };
    ion-icon{
        position: fixed;
        top: 10px;
        right: 10px;
        width: 13px;
        &:hover{
            cursor: pointer;
        }
    }
`
const Days = styled.div`
    display: flex;
`
const Day = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.isSelected ? "#CFCFCF" : "#D4D4D4"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border-radius: 5px;
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    `