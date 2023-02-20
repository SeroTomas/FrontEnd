import React from 'react'
import styles from "./users.module.css"
import logo from "../../Media/logo-03.png"
const Users = ({name,image}) => {
  return (
    <div>
        <h1>{name}</h1>
        {!image ? <img src={logo} className={styles.img}/> : <img src={image} className={styles.img}/>}
       
    </div>
  )
}

export default Users