import React from 'react'
import Style from "./Styles/BacktoHome.module.css"
import { Link } from 'react-router-dom'
const BacktoHome = () => {
  return (
    <div >
        <Link to="/">
      <button className={Style.button}>Voler al Home</button>
        </Link>
      </div>
  )
}

export default BacktoHome

