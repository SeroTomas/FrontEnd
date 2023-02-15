import React from 'react'
import Style from "./QandA.module.css"
import NavBar from '../NavBar/NavBar'
const QandA = () => {
  return (
    <div className={Style.background}>
      <NavBar />
      <h1>QandA Cuak 🦆</h1>
    </div>
  )
}

export default QandA