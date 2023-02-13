import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import logo from "./img/LOGO_SIN_FONDO.png"

const Landing = () => {
  return (
    <div>
      <nav className={styles.nav}>
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
      </nav>
      <section>
        <h1>codeCuak</h1>
        <h2>La red social por y para desarrolladores</h2>
        <p>
          Nace con la idea de crear un espacio amigable en el que los
          desarrolladores puedan distenderse, compartir ideas y proyectos
          propios, resolver dudas, buscar compañeros para trabajar en equipo y
          buscar trabajo. Todo dentro de un mismo espacio
        </p>
      </section>
      <section id="social">
        <h2>socialCuak</h2>
        <h3>Aquí podrás expresarte</h3>
        <p>
          lo que buscamos con “social-Cuak” es distendernos y conocernos;
          encontrar un clima agradable para despejar la mente.
        </p>
        <Link to="/social">
          <button>
            <span>Ir a socialCuak</span>
          </button>
        </Link>
      </section>
      <section id="Q&A">
        <h2>Q&A-Cuak</h2>
        <h3>Para crecer necesitamos ayudarnos entre todos</h3>
        <p>
          Por eso en “Q&A-Cuak” los usuarios podrán generar nuevas publicaciones
          solicitando ayuda o responder las consultas ya existentes.
        </p>

        <Link to="/qanda">
          <button>
            <span>Ir a Q&A-Cuak</span>
          </button>
        </Link>
      </section>
      <section id="work">
        <h2>workCuak</h2>
        <h3>La programación es un trabajo de equipo</h3>
        <p>
          “work-Cuack” está diseñado para buscar colaboradores para desarrollar
          proyectos propios.
        </p>

        <Link to="/work">
          <button>
            <span>Ir a workCuak</span>
          </button>
        </Link>
      </section>
      <section id="hiring">
        <h2>hiringCuak</h2>
        <h3>En codeCuak nos preocupamos por el futuro de nuestros miembros</h3>
        <p>
          Ideamos una sección en la que podrán cargar su perfil en el caso de
          que estén en búsqueda activa de empleo. Tambien las empresas podrán
          registrarse y publicar ofertas laborales para que los desarrolladores
          apliquen a ellas.
        </p>

        <Link to="/hiring">
          <button>
            <span>Ir a hiringCuak</span>
          </button>
        </Link>
      </section>
      <hr></hr>
      <footer className={styles.footer}>
        <div>
          <p>&copy; Copyright 2023. Todos los derechos reservados.</p>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/terminos">Terminos y Condiciones</Link>
            </li>
            <li>
            <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </footer>
            <img src={logo} alt="logofooter" className={styles.logoFooter}/>
    </div>
  );
};

export default Landing;
