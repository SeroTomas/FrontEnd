import React from "react";
import CardUser from "../AuxComponents/CardUser/CardUser";
import NavBar from "../NavBar/NavBar";
import PostUserContainer from "../AuxComponents/PostUserContainer/PostUserContainer";
import styles from "./User.module.css";

const User = () => {

  const userPrueba = {
    name: 'Juan',
    email: 'juan@gmail.com',
    nickName: 'Juanpito',
    birthdate: '1998/08/25',
    image: 'https://www.imagenesbonitasname.com/covers/preview/pues-si-wey-sticker-wasap.jpg',
    portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZZeLZAzPyAtBhCUl384gDJYN3ROMfPXtPDUlu3QAX9gyEEX6',
    technicalSkills: ["JavaScript", "React", "Redux", "Nextjs", "Sequelize"],
    softSkills: ["Liderazgo", "Proactividad", "Trabajo en equipo", "Resiliencia", "Empatía"],
    experiences: ["Lider tecnico en Amazon (2años)", "Freelancer (5 años)"],
  }
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.subContainer1}>
          <div className={styles.subContainerUser}>
            <div className={styles.portada}>
              <img src={userPrueba.portada} alt="Imagen de portada" />
            </div>
            <div className={styles.subContainerData}>
              <CardUser props={userPrueba} />
            </div>

            <div className={styles.subContainer2}>
              <div className={styles.containerSkills}>
                <div className={styles.title}>
                  <h4>Mis habilidades:</h4>
                </div>
                <div className={styles.TechnicalSkills}>
                  <h4>Technical Skills:</h4>
                  <div>
                    <ul>
                      {userPrueba.technicalSkills.map((skill) => {
                        return (
                          <li>{skill}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className={styles.SoftSkills}>
                  <h4>Soft Skills:</h4>
                  <div>
                    <ul>
                      {userPrueba.softSkills.map((skill) => {
                        return (
                          <li>{skill}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.containerExperience}>
                <div className={styles.title}>
                  <h4>Mis experiencias:</h4>
                </div>
                <div>
                  <ul>
                    {userPrueba.experiences.map((exp) => {
                      return (
                        <li>{exp}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <PostUserContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User