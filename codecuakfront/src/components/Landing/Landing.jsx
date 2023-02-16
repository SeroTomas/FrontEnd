import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import LoginButton from "../blueprints/buttonsAuth/LoginButton";
import logo from "../../Media/logo-03.png";
import Footer from "../blueprints/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../blueprints/buttonsAuth/LogOut"
const Landing = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <div className={styles.containter}>
      <nav className={styles.nav}>
        <a href="#code">
          <img src={logo} alt="logofooter" className={styles.logoFooter} />
        </a>
        <div className={styles.ul}>
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
        </div>
        <div className={styles.loginbtn}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton/>}
        </div>
      </nav>
      <section className={styles.sectionCode} id="code">
        <h1>codeCuak</h1>
        <h2>La red social por y para desarrolladores</h2>
        <p className={styles.codeP}>
          Nace con la idea de crear un espacio amigable en el que los
          desarrolladores puedan distenderse,<br/> compartir ideas y proyectos
          propios.
        </p>
        <p>
          Resolver dudas, buscar compañeros para trabajar en equipo y buscar
          trabajo.<br/> Todo dentro de un mismo espacio
        </p>
      </section>
      <section className={styles.sectionSocial} id="social">
        <div className={styles.contTexto}>
          <h2>socialCuak</h2>
          <h3>Aquí podrás expresarte</h3>
          <p className={styles.socialP}>
            Lo que buscamos con “social-Cuak” es distendernos y conocernos;
          </p>
          <p> encontrar un clima agradable para despejar la mente.</p>
        </div>
        <div className={styles.divLink}>
          <Link to="/social">
            <button className={styles.socialBtn}>Ir a socialCuak</button>
          </Link>
        </div>
        {/* <div className={styles.divImg}>
          <img src={social} alt="imgsocial" />
        </div> */}
      </section>
      <section className={styles.sectionQyA} id="Q&A">
        <div className={styles.contTexto}>
          <h2>Q&A-Cuak</h2>
          <h3>Para crecer necesitamos ayudarnos entre todos</h3>
          <p className={styles.socialP}>
            Por eso en “Q&A-Cuak” los usuarios podrán generar nuevas
            publicaciones
          </p>
          <p> solicitando ayuda o responder las consultas ya existentes.</p>
        </div>
        <div className={styles.divLink}>
          <Link to="/qanda">
            <button className={styles.socialBtn}>Ir a Q&A-Cuak</button>
          </Link>
        </div>
      </section>
      <section className={styles.sectionWork} id="work">
        <div className={styles.contTexto}>
          <h2>workCuak</h2>
          <h3>La programación es un trabajo de equipo</h3>
          <p className={styles.socialP}>
            “work-Cuack” está diseñado para buscar colaboradores para
            desarrollar proyectos propios.
          </p>
        </div>
        <div className={styles.divLink}>
          <Link to="/work">
            <button className={styles.socialBtn}>Ir a workCuak</button>
          </Link>
        </div>
      </section>
      <section className={styles.sectionHiring} id="hiring">
        <div className={styles.contTexto}>
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
        </div>
        <div className={styles.divLink}>
          <Link to="/hiring">
            <button className={styles.socialBtn}>Ir a hiringCuak</button>
          </Link>
        </div>
      </section>
      <hr></hr>
      <Footer/>
    </div>
  );
};

export default Landing;
