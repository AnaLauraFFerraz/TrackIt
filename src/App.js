import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from 'react';
import Context from './Context';
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HabitsPage from './pages/HabitsPage'
import TodayPage from './pages/TodayPage'
import HistoryPage from './pages/HistoryPage'

function App() {
  // const [user, setUser] = useState({});
  // const [percentage, setPercentage] = useState(0);
// value={{ user, setUser, percentage, setPercentage }}
  return (
    <Context.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
