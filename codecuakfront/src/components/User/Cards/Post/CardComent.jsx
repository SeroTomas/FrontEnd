import React from "react";
import styles from "./Styles/CardComent.module.css"

const CardComent=({props})=>{
    const coment = props;
    return(
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="Foto de usuario" />
            </div>
            <div className={styles.coment}>
                <span>{coment}</span>
            </div>
        </div>
    )
}

export default CardComent;