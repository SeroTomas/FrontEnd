import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validations } from "./validations";

import {
  FormControl,
  Box,
  TextField,
  Button,
  Typography,
  FormHelperText,
  Alert,
} from "@mui/material";
// FUNCION REGISTER POST
import { userRegister, userLogin } from "../axiosFunctions";
import { Opacity } from "@mui/icons-material";

const Register = () => {
  // ESTADOS LOCALES
  const [user, setUser] = useState({
    name: "",
    email: "",
    nickName: "",
    password: "",
  });
  const [backError, setBackError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    nickName: "",
    password: "",
  });
  // readySubmit se setea en true cuando no hay errores y estan todos los campos completos. Se usa para habilitar el boton Submit
  const readySubmit = (!errors.name && !errors.email && !errors.nickName && !errors.password && user.name && user.email && user.nickName && user.password)
  const navigate = useNavigate();
  const handleAlert = () => {
    setBackError("");
  };
  const handleSubmit = async () => {
    try {
      const response = await userRegister(
        user.name,
        user.email,
        user.nickName,
        user.password
      );
      localStorage.setItem("token", response?.data.token);
      if (response.status === 200) {
        setSuccess("Registro completado con exito");
        const loginResponse = await userLogin(user.email, user.password);
        localStorage.setItem("token", loginResponse.data.token);
        localStorage.setItem("id", loginResponse.data.user.id);
        localStorage.setItem("status", response.data.user.status)
        setTimeout(() => {
          navigate("/social");
        }, 3000);
      }
    } catch (error) {
      
      if (error == "El nickName ya es usado por un usuario") {
        setBackError("El nickName ya es usado por un usuario");
      } else if (error == "El email ya esta usado por un usuario") {
        setBackError("El email ya esta usado por un usuario");
      } else if (
        error == "El email y el nickName ya fueron usados por algun usuario"
      ) {
        setBackError(
          "El email y el nickName ya fueron usados por algun usuario"
        );
      }
      setTimeout(() => {
        setBackError("");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    validations(property, value, errors, setErrors);
    setUser({
      ...user,
      [property]: value,
    });
  };

  return (
    <Box padding="5rem">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button color="success" variant="outlined" sx={{ fontWeight: "bold" }}>
          Volver al home
        </Button>
      </Link>
      <Typography
        variant="h2"
        align="center"
        fontFamily="Sen"
        color="#1E8449"
        marginBottom="20px"
      >
        Register
      </Typography>
      {success && (
        <Alert
          severity="success"
          sx={{ width: "15%", margin: "auto", marginBottom: "2rem" }}
        >
          {success}
        </Alert>
      )}
      {backError && (
        <Alert
          severity="error"
          sx={{ width: "15%", margin: "auto", marginBottom: "2rem" }}
        >
          {backError}
        </Alert>
      )}
      <FormControl
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
          required
          sx={{ color: "black", width:"225px"}}
          label="Nombre y Apellido"
          value={user.name}
          name="name"
          placeholder="Nombre y Apellido"
          onChange={handleChange}
          error={errors.name.length}
          helperText={errors.name}
        />

        <TextField
          required
          sx={{ color: "black",  width:"225px" }}
          size="small"
          label={"Email"}
          value={user.email}
          name="email"
          type="text"
          placeholder="ejemplo@hotmail.com"
          onChange={handleChange}
          onClick={handleAlert}
          error={errors.email.length}
          helperText={errors.email}
        ></TextField>
        <TextField
          required
          sx={{ color: "black",  width:"225px" }}
          size="small"
          label={"Nombre de usuario"}
          value={user.nickName}
          name="nickName"
          type="text"
          placeholder="nombre de usuario"
          onChange={handleChange}
          error={errors.nickName.length}
          helperText={errors.nickName}
        ></TextField>
        <TextField
          required
          sx={{ color: "black",  width:"225px" }}
          size="small"
          label={"Contraseña"}
          value={user.password}
          name="password"
          type="password"
          placeholder="contraseña"
          onChange={handleChange}
          error={errors.password.length}
          helperText={errors.password}
        ></TextField>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            color="success"
            variant="outlined"
            sx={{ fontWeight: "bold", width: "14rem" }}
          >
            Log In
          </Button>
        </Link>
        <Box marginTop="20px">
          <Button
            sx={{ fontWeight: "bold", width: "14rem" }}
            style={ readySubmit? {} : {opacity: 0.7} }
            variant="contained"
            color="success"
            type="submit"
            onClick={handleSubmit}
            disabled={!readySubmit}
          >
            Enviar
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Register;
