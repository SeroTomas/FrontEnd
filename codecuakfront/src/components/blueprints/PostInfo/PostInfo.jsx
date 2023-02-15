//estilos
import style from "./postInfo.module.css"
//hooks
import { useState } from "react"

const PostInfo = ({formExpanded, setFormExpanded, user}) => {

    const [form, setForm] = useState("");

    const handlerChange = (event) => {
        const value = event.target.value;
        setForm(value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <div className={formExpanded ? style.containerExpanded : style.containerNotExpanded}>
            <div className={style.headerContainer}>
                <h3>Crear publicacion</h3>
                <button onClick={() => {setFormExpanded(!formExpanded)}}>X</button>
            </div>
            <div className={style.infoContainer}>
                <img src={user.image} alt="foto del usuario" />
                <p>{user.name}</p>
            </div>
            <div className={style.formContainer}>
                <form onSubmit={handlerSubmit}>
                    <input type="text" value={form} onChange={handlerChange} />
                    <button type="submit">Publicar</button>
                </form>
            </div>
        </div>
    )
}

export default PostInfo