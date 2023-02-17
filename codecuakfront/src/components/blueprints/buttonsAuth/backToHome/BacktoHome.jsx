import React from 'react'
import Style from "./BacktoHome.module.css"
import { Link } from 'react-router-dom'
const BacktoHome = () => {
  return (
    <div >
        <Link to="/">
      <button className={Style.button}>Volver al Home</button>
        </Link>
      </div>
  )
}

export default BacktoHome

