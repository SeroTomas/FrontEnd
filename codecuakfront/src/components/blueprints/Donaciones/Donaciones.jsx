import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import ButtonsDonaciones from "./ButtonsDonaciones";
import styles from "./Donaciones.module.css";
import BacktoHome from "../buttonsAuth/backToHome/BacktoHome";

const Donaciones = () => {
  const donaciones = [
    {
      price: 500,
    },
    {
      price: 1000,
    },
    {
      price: 2000,
    },
    {
      price: 3000,
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#D5DBDB"
      minWidth="100%"
      height="100%"
      minHeight="100vh"
      padding="5rem"
    >
      <Box marginTop="0">
        <BacktoHome />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        marginTop="1.5rem"
      >
        <Typography
          variant="h1"
          fontFamily={"Sen"}
          fontSize="5rem"
          color="#1E8449"
          sx={{ textShadow: " 1px 1px 2px grey" }}
        >
          ¡Hola a todos los amantes de la programación!
        </Typography>
      </Box>
      <Box className={styles.codetext}>
        <Typography variant="h5" fontFamily={"Sen"}>
          Somos un grupo de ocho programadores independientes, apasionados por
          nuestro trabajo y comprometidos con ofrecer una plataforma para
          programadores. Sabemos que hay muchas redes sociales disponibles, pero
          ninguna de ellas se enfoca en la comunidad de programadores y nos
          gustaría llenar ese vacío. Estamos trabajando arduamente en nuestro
          proyecto y queremos solicitar su ayuda para hacerlo realidad.
        </Typography>
        <br />
        <Typography variant="h5" fontFamily={"Sen"}>
          Nuestra plataforma tendrá como objetivo conectar programadores de todo
          el mundo, brindándoles un espacio donde puedan compartir sus ideas,
          proyectos, códigos y problemas. Además, también herramientas y
          recursos para ayudar a los programadores a mejorar sus habilidades.
          Sabemos que hay muchas personas apasionadas por la programación, pero
          no todos tienen acceso a una comunidad en línea para compartir sus
          conocimientos y aprender de otros, y es por eso que queremos crear una
          plataforma accesible para todos.
        </Typography>
        <br />
        <Typography variant="h5" fontFamily={"Sen"}>
          Estamos pidiendo donaciones para ayudarnos a financiar el desarrollo
          de nuestra plataforma y hacerla una realidad. Cualquier cantidad es
          bienvenida, y estamos comprometidos a utilizar todos los recursos para
          mejorar y expandir nuestra plataforma. Si usted es un amante de la
          programación o simplemente quiere apoyar nuestra causa, por favor
          considere hacer una donación. ¡Juntos podemos construir una comunidad
          de programadores más fuerte y conectada!
        </Typography>
      </Box>

      <Box
        height="10rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {donaciones.map((donacion) => {
          return <ButtonsDonaciones donacion={donacion} />;
        })}
      </Box>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Typography
          variant="h4"
          fontFamily={"Sen"}
          color="#1E8449"
          sx={{ textShadow: " 1px 1px 2px grey" }}
        >
          Muchas Gracias {">_c"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Donaciones;
