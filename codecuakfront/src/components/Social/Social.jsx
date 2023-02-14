// importamos estilos
import style from "./social.module.css";
//importamos hooks
import {useDispatch} from "react-redux";
import { fetchUser } from "../../redux/slices/user";
import { useEffect } from "react";
//importamos componentes
import NavBar from '../NavBar/NavBar';
import FormPost from "../FormPost/FormPost";

const Social = () => {
  const dispatch = useDispatch();
  // cuando se monta el componente fetcheamos el usuario de la persona que inicio sesion 
  // para luego utilizarlo en las cards de los posts y pagina de perfil
  useEffect(() => {
    dispatch(fetchUser)
  }, [dispatch])
  
  return (
    <div className={style.socialContainer}>
      <NavBar />
      <FormPost/>
    </div>
  )
}

export default Social