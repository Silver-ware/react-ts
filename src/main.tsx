import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from './Home/Home.tsx'
import Dashboard from './Dashboard/Dashboard.tsx';
import TicTacToe from './Game/TicTacToe.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/users" element={<Dashboard/>} />
        <Route path="/exercises" element={<Home/>} />
        <Route path="/game" element={<TicTacToe/>} />
        <Route path="/settings" element={<Home/>} />
      </Routes>
    </Router>
  </StrictMode>
)
