import React from 'react';
import Card from './Card';
import { userPrueba } from './userPrueba'

const User = () => {
  return (
    <>
      <Card props={userPrueba}/>
    </>
  )
}

export default User