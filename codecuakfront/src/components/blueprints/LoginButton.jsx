import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css"
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className={styles.loginBtn} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;