import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";
import { Box } from "@mui/system";
import { Button, Paper, Typography, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const Contacto = () => {
  const SERVICE_ID = "service_oaksvac";
  const TEMPLATE_ID = "template_trfjcil";
  const PUBLIC_KEY = "O7jgSb2G6PiunQMKB";
  const [result, setResult] = useState(false);
  const navigateTo = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("mensaje enviado");
    e.target.reset();

    navigateTo("/social");
  };

  return (
    <Box
      bgcolor="#D5DBDB"
      padding="5rem"
      height="100%"
      minHeight="100vh"
      fontFamily={"Sen"}
      sx={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
    >
      <Box>
        <Link to="/">
          <Button>Volver al Home</Button>
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
          fontSize="5rem"
        >
          Contacto
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          bgcolor="white"
          width="40rem"
          maxWidth="100%"
          height="30rem"
          borderRadius="2rem"
        >
       
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <Box display="flex" justifyContent="center" width="20rem" margin="0 auto">
              <TextField
              fullWidth
                name="name"
                label="Nombre"
                margin="normal"
              ></TextField>
              </Box>
              <Box display="flex" justifyContent="center" width="20rem" margin="0 auto">
              <TextField
              fullWidth 
                name="user_email"
                label="Email"
                margin="normal"
              ></TextField>
              </Box>
              <TextField
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          margin="normal"
        />
              <Box width="100%" height="100%">
              <Button variant="contained" endIcon={<SendIcon />}>
              </Button>
              </Box>
                Enviar
              <Box>
                {result ? <p>el mensaje ha sido enviado con exito</p> : null}
              </Box>
            </form>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Contacto;
