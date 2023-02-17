import React from "react";
import styles from "./AddComent.module.css";
import { useState } from "react";

const AddComent =({props})=>{
    const image = props;
    const [textArea, setTextArea] = useState("")

    const submitHandler=(event)=>{
        event.preventDefault();
    }

    return(
        <div className={styles.container}>
            <img src={image} alt="" />
            <form action="" className={styles.form} onSubmit={submitHandler}>
                <textarea type="text" placeholder="Escribe un comentario..." onChange={({target})=>setTextArea(target.value)} value={textArea}/>
                <button id="submit" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default AddComent