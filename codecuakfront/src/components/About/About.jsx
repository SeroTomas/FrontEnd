import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  const developers = [
    {name : "Peñamaria Ignacio", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "Corvalan Augusto Nicolas", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "Silverio  Tomas Eliseo", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "Peralta Santiago", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "Rivero Julián Martin", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "Abrajajajammm Emiratos Arabes", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},
    {name : "????? Eduardo", linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/", github : "https://github.com/nachitoxx6262" ,descripcion: "Full Stack Web Developer"},

  ]
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <br/>
      {developers?.map((element)=> {
        return(
          <section>
            <h2>{element.name}</h2>
            <p>{element.descripcion}</p>
            <Link to={element.github}>
             <i class="fa-brands fa-github"></i>
            </Link>
            <Link to={element.linkdin}>
            <i class="fa-brands fa-linkedin"></i>
            </Link>
          </section>
        )})}
    </div>
  )
}

export default About