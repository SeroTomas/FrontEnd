//importamos estilos
import style from "./formPost.module.css"
//importamos hooks
import { useState } from "react"
import { useDispatch } from "react-redux";
import axios from "axios";
import { sendPost } from "../../../redux/action";
// componentes
const FormPost = () => {
    const dispatch =  useDispatch();
    //usuario de prueba, los verdaderos vienen por props ya que el contenedor social hace el fetch de datos
    const user = {
        image: "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg",
        name: "Magali"
    }

    const [form, setForm] = useState("");
    const text = form.length;
    const [users, setUsers] = useState("a2e13a38-ae82-40e2-9a43-ac5a66310f1d")
    const handlerChange = (event) => {
        const value = event.target.value;
        setForm(value)
    }

    const handlerSubmit = async(event) => {
        event.preventDefault();
       dispatch(sendPost({content: form, userId: users}))
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.infoContainer}>
                    <div className={style.imgContainer}>
                        <img src={user.image} alt="foto del usuario" />
                    </div>
                    <p>{user.name}</p>

                </div>
                <div className={style.formContainer}>
                    <form onSubmit={handlerSubmit}>
                        <textarea value={form.content} onChange={handlerChange} placeholder={"Que es lo que quieres compartir?"} />
                        <div>
                            {
                                text > 1400 ? <p className={style.limitText}>{`${text}/1500 `}</p> : null
                            }
                            <button type="submit" disabled={text > 1500}>Publicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
                        }
export default FormPost