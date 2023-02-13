import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './components/Landing'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
