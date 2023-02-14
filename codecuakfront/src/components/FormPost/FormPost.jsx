//importamos estilos
import style from "./formPost.module.css"
//importamos hooks
import { useState } from "react"
//import { useSelector } from "react-redux"

const FormPost = () => {

    //traemos el usuario para usar su foto en el form
    //const user = useSelector(state => state.user)
    const user = {
        image: "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg"
    }

    const [text, setText] = useState('')

    const handlerText = (event) => {
        const value = event.target.value;
        setText(value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img src={user.image} alt="Foto de perfil del usuario" />
                </div>
                <div className={style.btnContainer}>
                    <button>Quieres hacer una publicacion?</button>
                </div>
            </div>

            <div className={style.formContainer}>
                <form onSubmit={handlerSubmit}>
                    <input type="text" value={text} onChange={handlerText} />
                    <button type="submit">Postear</button>
                </form>
            </div>

        </>
    )

}

export default FormPost