//hooks
import { useState } from "react";

//auxiliares
import { Avatar, Box, Button, Typography, } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//componentes
import ComentContainer from "../ComentContainer/ComentContainer";
import LongMenu from "../../LongMenu/LongMenu";


const CardPost = ({ postId, content, likes, userDev, user, userId }) => {
  // datos del posteo
  //datos del usuario que hizo el posteo sirve para los posteos del social
  const { name, image, id } = (userDev || user) ? (userDev || user) : { name: null, image: null }

  const [likeState, setStateLike] = useState(false);
  const [like, setLike] = useState(likes);
  const [viewComents, setViewComents] = useState(false);
  const status = localStorage.getItem("status")
  console.log(status);
  const handlerClick = () => {
    if (likeState == true) {
      setLike(like - 1)
    }
    else {
      setLike(like + 1)
    }
    setStateLike(!likeState)
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
          {status === "admin" || status === "superadmin"   ?  <LongMenu /> : (userId === id ? <LongMenu /> : null) }
        </Box>
        <Box width="90%" style={{ wordBreak: 'break-all' }}>
          <Typography fontFamily="Sen" variant="body1" color="black" fontSize="1.1em" whiteSpace="pre-wrap" > {content}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" alignSelf="start" marginLeft="20px" gap="10px">
          <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}> {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
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
