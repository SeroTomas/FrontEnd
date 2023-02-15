import React from 'react'
import Style from "./AboutCards.module.css"
import { Link } from 'react-router-dom';
import foto from "../../../Media/edu.jpg"
const AboutCards = () => {
    const developers = [
        {
          img:"https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
          name: "Peñamaria Ignacio",
          linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
          github: "https://github.com/nachitoxx6262",
          descripcion: "Full Stack Web Developer",
        },
        {
          img:"https://avatars.githubusercontent.com/u/101676297?v=4",
          name: "Abraham Emir Jose ",
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
          img:"https://avatars.githubusercontent.com/u/107959000?v=4",
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
  )
}

export default AboutCards