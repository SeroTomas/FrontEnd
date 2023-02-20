import React from "react";
import {Box,Typography,Button, Icon} from "@mui/material"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import LoginButton from "../blueprints/buttonsAuth/LoginButton";
import logo from "../../Media/logo-03.png";
import Footer from "../blueprints/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
const Landing = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <Box className={styles.containter}>
      <Box className={styles.nav}>
        <a href="#code">
          <img src={logo} alt="logofooter" className={styles.logoFooter} />
        </a>
        <Box className={styles.ul}>
          <ul>
            <li>
              <a href="#social">socialCuak</a>
            </li>
            <li>
              <a href="#Q&A">Q&A-Cuak</a>
            </li>
            <li>
              <a href="#work">workCuak</a>
            </li>
            <li>
              <a href="#hiring">hiringCuak</a>
            </li>
          </ul>
        </Box>
        <Box className={styles.loginbtn}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton/>}
        </Box>
      </Box>
      {/* ######################################## CODE CUAK #########################################*/}
      <Box id="code" bgcolor="#D5DBDB" height="45rem" padding="3rem">
        <Typography variant="h1" color="#1E8449" fontFamily={"Sen"}align="center"fontWeight="bold">{">_"}codeCuak</Typography>
        <Typography variant="h4" fontFamily={"Sen"}align="center" marginTop="1rem">La red social por y para desarrolladores</Typography>
        <Box className={styles.codetext}>
        <Typography variant="h5" fontFamily={"Sen"}align="center">
          Nace con la idea de crear un espacio amigable en el que los
          desarrolladores puedan distenderse,<br/> compartir ideas y proyectos
          propios.
        </Typography>
        <Typography variant="h5" fontFamily={"Sen"}align="center">
          Resolver dudas, buscar compañeros para trabajar en equipo y buscar
          trabajo.<br/> Todo dentro de un mismo espacio
        </Typography>
        </Box>
      </Box>
      {/* ######################################## SOCIA CUAK #########################################*/}

      <Box id="social" bgcolor="#dce3e3" height="40rem" padding="3rem" display="flex" justifyContent="center" gap="3rem">
        <Box>
          <Typography variant="h1"  marginTop="2rem"color="#1E8449" fontFamily={"Sen"}align="center"fontWeight="bold">socialCuak</Typography>
          <Typography variant="h4" margin="2rem"fontFamily={"Sen"}align="center">Aquí podrás expresarte</Typography>
          <ConnectWithoutContactIcon />
          <Typography variant="h5"fontFamily={"Sen"}align="center">
            Lo que buscamos con “social-Cuak” es distendernos y conocernos;
          </Typography>
          <Typography  variant="h5" fontFamily={"Sen"}align="center"> encontrar un clima agradable para despejar la mente.</Typography>
          
        </Box>
        <Box display="flex" alignItems="center">
          <Link to="/social" style={{"textDecoration":"none"}} >
            <Button color="success" variant="contained" sx={{fontWeight:"bold"}} >Ir a socialCuak</Button>
          </Link>
        </Box>
        
      </Box>
      {/* ######################################## Q&A CUAK #########################################*/}

      <Box className={styles.sectionQyA} id="Q&A">
        <Box className={styles.contTexto}>
          <h2>Q&A-Cuak</h2>
          <h3>Para crecer necesitamos ayudarnos entre todos</h3>
          <p className={styles.socialP}>
            Por eso en “Q&A-Cuak” los usuarios podrán generar nuevas
            publicaciones
          </p>
          <p> solicitando ayuda o responder las consultas ya existentes.</p>
        </Box>
        <Box className={styles.BoxLink}>
          <Link to="/qanda">
            <button className={styles.socialBtn}>Ir a Q&A-Cuak</button>
          </Link>
        </Box>
      </Box>
      {/* ######################################## WORK CUAK #########################################*/}

      <Box className={styles.sectionWork} id="work">
        <Box className={styles.contTexto}>
          <h2>workCuak</h2>
          <h3>La programación es un trabajo de equipo</h3>
          <p className={styles.socialP}>
            “work-Cuack” está diseñado para buscar colaboradores para
            desarrollar proyectos propios.
          </p>
        </Box>
        <Box className={styles.BoxLink}>
          <Link to="/work">
            <button className={styles.socialBtn}>Ir a workCuak</button>
          </Link>
        </Box>
      </Box>
      {/* ######################################## HIRING CUAK #########################################*/}

      <Box className={styles.sectionHiring} id="hiring">
        <Box className={styles.contTexto}>
          <h2>hiringCuak</h2>
          <h3>
            En codeCuak nos preocupamos <br />
            por el futuro de nuestros miembros
          </h3>
          <p className={styles.socialP}>
            Ideamos una sección en la que podrán cargar su perfil en el caso de
            que estén en búsqueda activa de empleo.{" "}
          </p>
          <p>
            Tambien las empresas podrán registrarse y publicar ofertas laborales
            para que los desarrolladores apliquen a ellas.
          </p>
        </Box>
        <Box className={styles.BoxLink}>
          <Link to="/hiring">
            <button className={styles.socialBtn}>Ir a hiringCuak</button>
          </Link>
        </Box>
      </Box>
      <hr></hr>
      <Footer/>
    </Box>
  );
};

export default Landing;
