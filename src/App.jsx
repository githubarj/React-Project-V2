
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainContent from './Components/MainContent/MainContent'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(false);
  function toggle() {
    setMode((prev) => !prev);
  }

  return (
    <div className={`app ${mode && "light-app"}`} >
      <Navbar  handleClick = {toggle} mode={mode}/>
      <MainContent mode ={mode}  />
    </div>
  )
}

export default App
