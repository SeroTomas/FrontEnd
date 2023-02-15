import React from "react";
import AddComent from "./AddComent.jsx";
import CardsComents from "./CardsComents";
import styles from "./Styles/CardPost.module.css";

const CardPost=({ props })=>{
    const {post, userPrueba} = props;
    const { image, name } = userPrueba;
    const {content, likes, coments} = post;
    return(
        <>
            <div className={styles.container}>
                <div className={styles.userData}>
                    <img src={image} alt="Foto de perfil" />
                    <span>{name}</span>
                </div>
                <div className={styles.content}>
                    <span>{content}</span>
                </div>
                <div className={styles.likes}>
                    <span>{likes}</span>
                </div>
                <div className={styles.addComent}>
                    <AddComent props={image}/>
                </div>
                <div className={styles.comentarios}>
                    <CardsComents props={coments}/>
                </div>
            </div>
        </>
    )

}

export default CardPost