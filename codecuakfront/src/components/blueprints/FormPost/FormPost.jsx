//importamos estilos
import style from "./formPost.module.css"
//importamos hooks
import { useState } from "react"
// componentes
import PostInfo from "../PostInfo/PostInfo"

const FormPost = () => {

    //usuario de prueba, los verdaderos vienen por props ya que el contenedor social hace el fetch de datos
    const user = {
        image: "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg",
        name: "Magali"
    }

    const [formExpanded, setFormExpanded] = useState(false)

    const handlerExpanded = () => {
        setFormExpanded(!formExpanded)
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img src={user.image} alt="Foto de perfil del usuario" />
                </div>
                <button>Desea crear una publicacion?</button>
            </div>
            <PostInfo
                formExpanded={formExpanded}
                setFormExpanded={setFormExpanded}
                user={user}
            />
        </>
    )

}

export default FormPost