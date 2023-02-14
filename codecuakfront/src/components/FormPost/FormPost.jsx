//importamos estilos
import style from "./formPost.module.css"
//importamos hooks
import { useState } from "react"
import { useSelector } from "react-redux"

const FormPost = () => {

    const user = useSelector(state => state.user)

    const [text, setText] = useState('')

    const handlerText = (event) => {
        const value = event.target.value;
        setText(value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault; 

    }

    return (
        <>
            <div className={style.container}>
                <div className={style.infoUser}>
                    <div className={style.imgContainer}>
                   </div>
                   <div className={style.nameContainer}>
                   </div>
                </div>
                <div className={style.FormContainer}>
                    <form onSubmit={handlerSubmit}>
                        <input type="text" value={text} onChange={handlerText} />
                        <button type="submit">Postear</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default FormPost