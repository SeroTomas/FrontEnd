import React from "react";
import CardUser from "./CardUser";
import NavBar from "../NavBar/NavBar";
import { userPrueba } from "./userPrueba"
import styles from "./User.module.css"

const User = () => {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
          <div className={styles.portada}>
            <img src={userPrueba.portada} alt="Imagen de portada" />
          </div>
        <div className={styles.subContainer1}>
          <div className={styles.subContainerData}>
            <CardUser props={userPrueba}/>
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
                  {userPrueba.technicalSkills.map((skill)=>{
                    return(
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
                  {userPrueba.softSkills.map((skill)=>{
                    return(
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
                {userPrueba.experiences.map((exp)=>{
                  return(
                    <li>{exp}</li>
                  )
                })}
                </ul>    
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default User