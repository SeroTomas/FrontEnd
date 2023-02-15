import React from "react";
import { Link } from "react-router-dom";
import BacktoHome from "../blueprints/BacktoHome";
import Style from "./About.module.css";
const About = () => {
  const developers = [
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Peñamaria Ignacio",
      linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
      github: "https://github.com/nachitoxx6262",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Abraham Jose Emir ",
      linkdin: "https://www.linkedin.com/in/emirabraham/",
      github: "https://github.com/EmirAbraham",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Salas Juan Camilo",
      linkdin: "https://www.linkedin.com/in/juan-salas-594266254/",
      github: "https://github.com/JuanCamiloSalas",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Peralta Santiago",
      linkdin: "https://www.linkedin.com/in/santiago-peralta-1961b8258/",
      github: "https://github.com/SantiagoPeralta30",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Rivero Julián Martin",
      linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
      github: "https://github.com/nachitoxx6262",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Galvez Eduardo",
      linkdin: "https://www.linkedin.com/in/eduardo-jim%C3%A9nez-galvez-aab318257/",
      github: "https://github.com/DarkItchy",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Corbalan Augusto Nicolas",
      linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
      github: "https://github.com/nachitoxx6262",
      descripcion: "Full Stack Web Developer",
    },
    {
      img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Silverio  Tomas Eliseo",
      linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
      github: "https://github.com/nachitoxx6262",
      descripcion: "Full Stack Web Developer",
    },
  ];
  return (
    <div className={Style.background}>
      <BacktoHome/>
      <div className={Style.head}>
      <h1>Sobre Nosotros</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      </div>
      <br />
      <div className={Style.sectionsContenedor}>
        {developers?.map((element) => {
          return (
            <section className={Style.section}>
              <img src={element.img} className={Style.imgProfile}/>
              <div>
              <h2>{element.name}</h2>
              <p>{element.descripcion}</p>
              <div className={Style.divlogos}>
              <Link to={element.github}>
                <i class="fa-brands fa-github fa-xl"></i>
              </Link>
              <Link to={element.linkdin}>
                <i class="fa-brands fa-linkedin fa-xl" ></i>
              </Link>
              </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default About;
