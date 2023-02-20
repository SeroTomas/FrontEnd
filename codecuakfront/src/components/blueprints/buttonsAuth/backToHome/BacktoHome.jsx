import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material-next/Button';

const BacktoHome = () => {
  return (
    <div >
        <Link to="/" style={{"textDecoration":"none"}}>
      <Button  color="#1E8449" size="large"  variant="text">Volver al Home</Button>
        </Link>
      </div>
  )
}

export default BacktoHome

