import { useState } from "react"
import style from "./formPost.module.css"

const FormPost = () => {

    const [text, setText] = useState('')

    const handlerText = (event) => {
        const value = event.target.value;
        setText(value)
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.FormContainer}>
                    <form>
                        <input type="text" value={text} onChange={handlerText} />
                        <button type="submit">Postear</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default FormPost