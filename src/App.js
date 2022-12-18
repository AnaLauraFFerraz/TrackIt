import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Habits from './pages/Habits'
import Today from './pages/Today'
import History from './pages/History'

function App() {

  return (
    <UserContext.Provider value={{ user, setUser, percentage, setPercentage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
