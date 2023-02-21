import styles from "./Styles/Button.module.css"
import React from "react";
import { useState } from "react";

const LoginButton = () => {
  const [text,setText]=useState("Log In")
  const handleClick=()=>{
   setText("Proximamente")
  }
 
  return (
    <>
    <button className={styles.loginBtn} onClick={handleClick}>{text}</button>;
    </>
  )
};

export default LoginButton;