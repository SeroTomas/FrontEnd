import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
const NotAdmin = () => {
    const navitage = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navitage("/");
    }, 6000);
  }, [navitage]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bgcolor="#D5DBDB"
      minWidth="100%"
      // height="100%"
      minHeight="100vh"
      // padding="5rem"
      padding={{ xs: "1rem", sm: "2rem 5rem" }}
    >
      <Typography
        variant="h2"
        margin="1rem"
        color="#1E8449"
        fontFamily={"Sen"}
        align="center"
        fontWeight="bold"
        sx={{ textShadow: " 1px 1px 2px grey" }}
      >
        Hemos notado que intentaste a un lugar que no tienes permisos
      </Typography>
      <Typography variant="h5" color="#1E8449" fontFamily={"Sen"} marginTop="3rem">
        Gracias por intentarlo,  <br />
        esperamos que tengas una linda estadia por codeCuak
      </Typography>
      <Typography
        variant="h6"
        marginTop="5rem"
        color="#1E8449"
        fontFamily={"Sen"}
        fontWeight="bold"
        style={{ textDecoration: "underline" }}
      >
        codeCuak team {">_c"}
      </Typography>
      <Typography variant="h6" marginTop="8rem">
        Pronto seras redirijido a nuestra pagina principal
      </Typography>
      <CircularProgress color="success" />
    </Box>
  )
}

export default NotAdmin