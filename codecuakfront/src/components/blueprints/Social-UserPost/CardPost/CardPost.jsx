//estilos
import styles from "./CardPost.module.css";
//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { postLike } from "../../../../redux/action"
//auxiliares
import { Avatar, Box, Button, Typography, } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//componentes
import ComentContainer from "../ComentContainer/ComentContainer";
import LongMenu from "../../LongMenu/LongMenu";


const CardPost = ({ post, user }) => {
  const dispatch = useDispatch();
  // datos del posteo
  const { content, socialcomments, likes, id } = post;
  //datos del usuario que hizo el posteo sirve para los posteos del social
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const { name, image } = (post.userdev || user)? (post.userdev || user) : {name: null, image:null}
  //Estados locales
  const [viewComents, setViewComents] = useState(false);


  const handlerClick = () => {
    dispatch(postLike(id, userId, token));
  }

  const handlerComment = () => {
    setViewComents(!viewComents)
  }

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
            <Avatar src={image} alt="Foto de perfil" />
            <Typography fontFamily="sen" variant="h6" color="black">{name}</Typography>
          </Box>
          <LongMenu post={post} />
        </Box>
        <Box width="90%" >
          <Typography fontFamily="Sen" variant="body1" color="black" fontSize="1.1em">{content}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" alignSelf="start" marginLeft="20px" gap="10px">
          <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}> {likes.includes(userId) ? <FavoriteIcon /> : <FavoriteBorderIcon />}{likes.length}</Button>
          <Button onClick={() => { handlerComment() }} color="success">Comentar</Button>
        </Box>
        {
          viewComents ?
            <ComentContainer socialcomments={socialcomments} postId={id} /> : null
        }
      </Box>
    </>
  );
};

export default CardPost;
