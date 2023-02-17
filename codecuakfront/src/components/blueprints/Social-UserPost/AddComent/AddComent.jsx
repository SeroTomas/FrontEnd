//estilos
import styles from "./AddComent.module.css";
//hooks
import { useState } from "react";
//actions
import { sendComment } from "../../../../axiosFunctions";

const AddComent = (props) => {
    const [coment, setComent] = useState("")

    const handlerChange = (event) => {
        const value = event.target.value;
        setComent(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        sendComment(coment, props.userdevId, props.postId)
    }

    return (
        <div className={styles.container}>
            <img src={props.image} alt="" />
            <form action="" className={styles.form} onSubmit={submitHandler}>
                <textarea type="text" placeholder="Escribe un comentario..." onChange={handlerChange} value={coment} />
                <button id="submit" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default AddComent