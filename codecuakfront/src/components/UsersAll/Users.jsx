import React from 'react'
import styles from "./users.module.css"
const Users = ({name,image}) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={image} className={styles.img}/>
    </div>
  )
}

export default Users