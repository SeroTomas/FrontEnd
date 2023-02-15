import React from "react";
import AddComent from "./AddComent.jsx";
import CardsComents from "./CardsComents";
import { useState } from "react";
import styles from "./Styles/CardPost.module.css";

const CardPost=({ props })=>{
    const {post, userPrueba} = props;
    const { image, name } = userPrueba;
    const {content, likes, coments} = post;
    const [ like, setLike] = useState(false);

    
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
                    <button className={like? "fa-sharp fa-solid fa-heart" : "fa-sharp fa-regular fa-heart"} onClick={()=>setLike(!like)}/>
                    <span>{likes} </span>
                </div>
                <div className={styles.addComent}>
                    <AddComent props={image}/>
                </div>
                <div className={styles.comentarios}>
                    <CardsComents props={coments}/>
                </div>
                <div className={styles.corazon}>
                </div>
            </div>
        </>
    )

}

export default CardPost