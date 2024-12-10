import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';
import SinglePlayer from "./components/SinglePlayer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Player Search</h1>
      <NewPlayerForm />
      <Router>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/player/:playerId" element={<SinglePlayer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App