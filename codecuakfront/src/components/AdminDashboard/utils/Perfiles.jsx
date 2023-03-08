import { Box, Fab } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useNavigate} from "react-router-dom"
const Perfiles = ({ params, rowId, setRowId }) => {
  let { id } = params.row
  const navigate  = useNavigate()
  const handleClick =  ()=>{
    navigate(`/users/${id}`)
  }
  return (
    <Box>
        <Fab color="primary" sx={{   width: 40,   height: 40, }} onClick={handleClick}>
          <AccountCircleIcon />
        </Fab>
    </Box>
  )
  }
export default Perfiles;