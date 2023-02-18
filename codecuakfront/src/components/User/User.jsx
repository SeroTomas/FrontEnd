import React from "react";
//importo Hooks
import { useSelector } from "react-redux";
//Importo componentes react
import CardUser from "../AuxComponents/CardUser/CardUser";
import NavBar from "../NavBar/NavBar";
import PostUserContainer from "../AuxComponents/PostUserContainer/PostUserContainer";
//Importo estilos
import styles from "./User.module.css";

const User = () => {

  const userData = useSelector((state)=> state.userData);
    
    // imagenes portada y perfil por default
    const portadaDefault= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZZeLZAzPyAtBhCUl384gDJYN3ROMfPXtPDUlu3QAX9gyEEX6';
    const imageDefault= 'https://www.imagenesbonitasname.com/covers/preview/pues-si-wey-sticker-wasap.jpg';

    // Creo un objeto con los datos necesarios en cardUser, para pasarlos por props
    const cardUserData= {
      name: userData.name,
      nickName: userData.nickName,
      image: userData.image || imageDefault,
      email: userData.email,
      gitHub: userData.gitHub
    }

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.subContainer1}>
          <div className={styles.subContainerUser}>
            <div className={styles.portada}>
              <img src={userData.portada || portadaDefault} alt="Imagen de portada" />
            </div>
            <div className={styles.subContainerData}>
              <CardUser userData={cardUserData} />
            </div>

            <div className={styles.subContainer2}>
              <div className={styles.containerSkills}>
                <div className={styles.title}>
                  <h4>Mis habilidades:</h4>
                </div>
                <div className={userData.TechnicalSkills}>
                  <h4>Technical Skills:</h4>
                  <div>
                    <ul>
                      {userData.technicalSkills?.map((skill) => {
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
                      {userData.softSkills?.map((skill) => {
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
                    {userData.experiences?.map((exp) => {
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