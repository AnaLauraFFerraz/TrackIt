import { useEffect, useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components"
import { UserContext } from "../UserContext";
import Header from "../components/Header"
import Menu from "../components/Menu"
import HabitCard from "../components/HabitCard";

export default function HabitsPage() {

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { user } = useContext(UserContext);
    const token = user.token;

    const [loading, setLoading] = useState(false);
    const [habits, setHabits] = useState([]);
    const [addHabit, setAddHabit] = useState(false);
    const [selected, setSelected] = useState(false);
    const [habitForm, setHabitForm] = useState({
        name: "",
        days: []
    })

    const urlHabitsList = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const urlHabits = `htts://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    const config = {headers: {Authorization: `Bearer ${token}`}};

    useEffect(() => {
        const promise = axios.get(urlHabitsList);
        promise.then((res) => setHabits(res.data));
        promise.catch((err) => console.log("ERR", err));
    })

    function handleDayClick({ e }) {
        setSelected(!selected);
        if (selected) {
            setHabitForm({ ...habitForm, [e.target.name]: e.target.value })
        } else {
            setHabitForm(habitForm.days.filter((day) => day !== e))
        }
    }

    function handleSave(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            name: habitForm.name,
            days: habitForm.days
        }

        const promise = axios.post(urlHabits, body, config);
        promise.then((res) => {
            setHabits(...habits, res.data)
        });
        promise.catch((err) => console.log("ERR", err));
    }

    function handleCancel() {
        setHabitForm({
            name: "",
            days: []
        });
        setAddHabit(false);
        setSelected(false);
    }

    return (
        <>
            <div data-test="header">
                <Header />
            </div>
            <MainContent>
                <Container>
                    <h3>Meus Hábitos</h3>
                    <button onClick={() => setAddHabit(true)}>+</button>
                </Container>

                <NewHabitCard disabled={addHabit}>
                    <Input
                        type="text"
                        id="name"
                        value={habitForm.name}
                        placeholder="nome do hábito"
                        onChange={(e) => {
                            setHabitForm({
                                ...habitForm,
                                [e.target.name]: e.target.value,
                            })
                        }}
                    />
                    <Weekdays>
                        {weekdays.map((d) => {
                            return (
                                <Weekday
                                    id={d}
                                    name="days"
                                    onClick={(e) => handleDayClick(e)}
                                >{d}</Weekday>
                            )
                        })}
                    </Weekdays>
                    <Action>
                        <Cancel type="button" onClick={() => handleCancel()}>Cancelar</Cancel>
                        <Save type="button" onClick={() => handleSave()}>
                            {
                                loading ? <ThreeDots
                                    width="60"
                                    height="15"
                                    radius="9"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                /> : "Salvar"
                            }
                        </Save>
                    </Action>
                </NewHabitCard>

                {habits !== [] ?
                    habits.map((h, index) => {
                        return <HabitCard
                            key={index}
                            habit={h}
                            weekdays={weekdays}
                        />
                    })
                    : <NoHabits>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </NoHabits>
                }

            </MainContent>
            <div data-test="menu">
                <Menu />
            </div>
        </>
    )
}

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vw;
    align-items: center;
    background: #EBEBEB;
`
const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 75px;
    margin-top: 72px;
    padding: 20px 18px;
    box-sizing: border-box;
    border: none;
    h3 {
        font-family: 'Lexend Deca';
        font-size: 22.976px;
        font-weight: 400;
        line-height: 29px;
        color: #126BA5;
    };
    button {
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
    }
`
const NoHabits = styled.p`
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const NewHabitCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    padding: 18px;
    box-sizing: border-box;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 5px;
`
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
        font-family: 'Lexend Deca';
    }
    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
`
const Weekdays = styled.div`
    display: flex;
    margin-bottom: 29px;
`
const Weekday = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid ${props => props.isSelected ? "#CFCFCF" : "#D4D4D4"};
    color: ${props => props.isMarked ? "#FFFFFF" : "#DBDBDB"};
    border-radius: 5px;
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
`
const Action = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
`
const Cancel = styled.button`
    border: none;
    color: #52B6FF;
    background-color: #FFFFFF;
    margin-right: 23px;
    &:hover{
        cursor: pointer;
    }
`
const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`