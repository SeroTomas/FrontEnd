import React from 'react'
import LoginButton from '../blueprints/buttonsAuth/LoginButton'
import LogoutButton from '../blueprints/buttonsAuth/LogOut'
import Profile from '../blueprints/buttonsAuth/Perfil'
const Auth = () => {
  return (
    <div>
      <LoginButton />
      <LogoutButton/>
      <Profile />
    </div>
  )
}

export default Auth