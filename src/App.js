import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from './UserContext';

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HabitsPage from './pages/HabitsPage'
import TodayPage from './pages/TodayPage'
import HistoricPage from './pages/HistoricPage'

function App() {
  const [user, setUser] = useState({});;
  // const [token, setToken] = useState("");
  const [image, setImage] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, image, setImage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
