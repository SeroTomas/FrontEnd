// importamos estilos
import style from "./social.module.css";
//importamos hooks
import {useDispatch} from "react-redux";
import { fetchUser } from "../../redux/slices/user";
import { useEffect } from "react";
//importamos componentes
import NavBar from '../NavBar/NavBar';
import FormPost from "../blueprints/FormPost/FormPost";
import CardsPost from "./Post/CardsPost";

const Social = () => {


  const dispatch = useDispatch();
  // cuando se monta el componente fetcheamos el usuario de la persona que inicio sesion 
  // para luego utilizarlo en las cards de los posts y pagina de perfil
  useEffect(() => {
    dispatch(fetchUser)
  }, [dispatch])
  
  return (
    <>
      <NavBar />
      <div className={style.socialContainer}>
        <div className={style.containerPost}>
          <FormPost/>
          <CardsPost/>
        </div>
      </div>
    </>
  )
}

export default Social