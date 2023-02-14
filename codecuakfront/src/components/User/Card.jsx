import React from "react";
import style from "./Card.module.css"

const Card=({ props })=>{
    console.log(props)
    return(
        <div className={style.container}>
            <div className={style.containerImg}>
                <img src={props.image} alt="Foto de perfil" />
            </div>
            <h2>{props.name}</h2>
        </div>
    )

}

export default Card