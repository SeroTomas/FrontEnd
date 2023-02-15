import React from "react";
import style from "./CardUser.module.css"

const Card=({ props })=>{
    return(
       
        <div className={style.container}>
            <div className={style.containerImg}>
                <img src={props.image} alt="Foto de perfil" />
            </div>
            <div className={style.containerData}>
                <div className={style.name}>
                    <h2>{`${props.name}`}</h2>
                    <h3>{` (${props.nickName})`}</h3>
                </div>
                <div className={style.contacts}>
                    <h4>{props.email}</h4>
                    <h4>GitHub</h4>
                </div>
            </div>
        </div>
       
    )

}

export default Card