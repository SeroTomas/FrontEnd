import React from 'react'
import { Avatar, Box, Button, Typography, } from "@mui/material";
const CardUser = ({post}) => {
    
  return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="48%"
        bgcolor="#f2f2f2"
        borderRadius="10px"
        padding="1em"
        boxShadow="3"
        gap="15px"
      >
        <Box display="flex" flexDirection="row" alignItems="start" width={1}>
          <Box display="flex" gap="15px" alignItems="center" flexGrow={1}>
            <Avatar src={post.userdev.image} alt="Foto de perfil" />
            <Typography fontFamily="sen" variant="h6" color="black">{post.userdev.name}</Typography>
          </Box>
        </Box>
        <Box width="90%" >
          <Typography fontFamily="Sen" variant="body1" color="black" fontSize="1.1em">{post.content}</Typography>
        </Box>
        <Box>{post.socialcomments.map((ele)=>{
          return(
            <p>{ele.content}</p>
          )
        })}</Box>
        </Box>

  )
}


export default CardUser