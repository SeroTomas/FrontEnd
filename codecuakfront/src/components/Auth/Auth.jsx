import React from 'react'
import LoginButton from '../blueprints/LoginButton'
import LogoutButton from '../blueprints/LogOut'
import Profile from '../blueprints/Perfil'
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