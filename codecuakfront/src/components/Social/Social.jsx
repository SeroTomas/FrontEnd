// importamos estilos
import style from "./social.module.css";
import {Box,Typography,Button, Icon} from "@mui/material"
//importamos hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//importamos actions
import { getUserById } from "../../redux/action";
//importamos componentes
import NavBar from '../NavBar/NavBar';
import FormSocialPost from "../AuxComponents/FormSocialPost/FormSocialPost";
import PostSocialContainer from "../AuxComponents/PostSocialContainer/PostSocialContainer";

const Social = () => {

  const user = useSelector(state => state.userData)
  const dispatch = useDispatch();
  // cuando se monta el componente fetcheamos el usuario de la persona que inicio sesion 
  // para luego utilizarlo en las cards de los posts y pagina de perfil
  useEffect(() => {
    // dispatch(fetchUser) hardcodeado hasta tener inicio de sesion
    dispatch(getUserById("2e7f46cd-6f32-43df-99b9-060b7edeab7e"));
  }, [dispatch])
  console.log(user);
  return (
    <>
      <Box className={style.socialContainer}>
        <NavBar />
        <FormSocialPost user = {user}/>
        <PostSocialContainer />
      </Box>
    </>
  )
}

export default Social