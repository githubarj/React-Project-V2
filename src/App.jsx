import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainContent from './Components/MainContent/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
