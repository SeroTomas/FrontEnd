//hooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
//actions
import {  postLike } from "../../../../redux/action";
//auxiliares
import { Avatar, Box, Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//componentes
import ComentContainer from "../ComentContainer/ComentContainer";
import LongMenu from "../../LongMenu/LongMenu";
import FormDialog from "../../FormDialog/FormDialog";
import { deletePost } from "../../../../axiosFunctions";

// datos del posteo por props
const CardPost = ({ postId, content, likes, userDev, user, userId, imagenPost }) => {
  const dispatch = useDispatch();
  //datos del usuario que hizo el posteo sirve para los posteos del social
  // traemos el token para poder hacer el dispatch de los likes
  const token = localStorage.getItem("token");
  const { name, image, id } = userDev || user ? userDev || user : { name: null, image: null };
  const [viewComents, setViewComents] = useState(false);
  const [option, setOption] = useState("")
  const idUserlog = localStorage.getItem("Id")
  // traemos el status para poder verificar que categoria es el usuario
  // y saber si renderizar el menu desplegable de opciones para hacer
  // put y delete de los posteos
  const status = localStorage.getItem("status");

  const handlerClick = () => {
    dispatch(postLike(postId, idUserlog, token));
  };

  const handlerComment = () => {
    setViewComents(!viewComents);
  };

  useEffect(()=>{
    if (option === "Eliminar") {
     deletePost(postId, token)
     setTimeout(()=>{window.location.reload()}, 1000)
    }
  },[option])

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={1}
        bgcolor="#f2f2f2"
        borderRadius="10px"
        padding="1em"
        boxShadow="3"
        gap="15px"
      >
        <Box display="flex" flexDirection="row" alignItems="start" width={1}>
          <Box display="flex" gap="15px" alignItems="center" flexGrow={1}>
            <Link to={`/users/${userDev?.id}`}>
            <Avatar src={image} alt="Foto de perfil" />
            </Link>
            <Typography fontFamily="sen" variant="h6" color="black">
              {name}
            </Typography>
            {
              // aca vamos a intentar tener el input desplegable para modificar el posteo
              option === "Editar" ? <FormDialog setOption={setOption} postId={postId} content={content} /> : null
            }
          </Box>
          {
            // primero averiguamos si el status se trata de un superadmin o admin
            // para renderizar las opciones en todos los posteos
            // si el usuario es dev, solo se le renderizaran en los posteos propios
            status === "admin" || status === "superadmin" ? (
              <LongMenu setOption={setOption} />
            ) : userId === id ? (
              <LongMenu setOption={setOption} />
            ) : null
          }
        </Box>
        <Box width="90%" style={{ wordBreak: "break-all" }}>
          <Typography
            fontFamily="Sen"
            variant="body1"
            color="black"
            fontSize="1.1em"
            whiteSpace="pre-wrap"
          >
            {content}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="100%"
          >
            <img src={imagenPost} style={{ maxWidth: "80%" }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          alignSelf="start"
          marginLeft="20px"
          gap="10px"
        >
          <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}>
            {likes.includes(idUserlog) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            {likes.length}
          </Button>
          <Button
            onClick={() => {
              handlerComment();
            }}
            color="success"
          >
            Comentar
          </Button>
        </Box>
        {viewComents ? <ComentContainer postId={postId} /> : null}
      </Box>
    </>
  );
};

export default CardPost;
