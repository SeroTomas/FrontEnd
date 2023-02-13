import './App.css'
import { Routes,Route } from 'react-router-dom'
import Hiring from './components/Hiring/Hiring'
import Landing from './components/Landing/Landing'
import QandA from './components/QandA/QandA'
import Social from './components/Social/Social'
import Work from './components/Work/Work'
import Auth from './components/Auth/Auth'
import User from './components/User/User'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/hiring" element={<Hiring />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/qanda" element={<QandA />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default App
