import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Player Search</h1>
      <NewPlayerForm />
      <AllPlayers />
    </>
  )
}

export default App