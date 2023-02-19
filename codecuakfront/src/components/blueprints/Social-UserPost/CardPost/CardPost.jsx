//estilos
import styles from "./CardPost.module.css";
//hooks
import { useEffect, useState } from "react";
//componentes
import AddComent from "../AddComent/AddComent";
import ComentContainer from "../ComentContainer/ComentContainer";


const CardPost = ({ post }) => {
  // datos del posteo
  const { content, socialcomments, imagePost, likes, userdevId, id } = post;
  //datos del usuario que hizo el posteo
  const { name, image } = post.userdev

  const [likeState, setStateLike] = useState(false);
  const [like, setLike] = useState(likes);

  useEffect(()=>{
    if(Object.entries(post).length>0){
      stringTohtml(content)
    };
  },[post.content])
 
  // Función que inserta el contenido del post (post.content) como html. De esta forma manejamos el texto que nos llega con tags html.

  function stringTohtml(text){
    const $contentPost = document.getElementById(id);
    $contentPost.innerHTML = text;
    return $contentPost;
  }

  const handlerClick = () => {
    if (likeState == true) {
      setLike(like - 1)
    }
    else {
      setLike(like + 1)
    }
    setStateLike(!likeState)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userData}>
          <img src={image} alt="Foto de perfil" />
          <span>{name}</span>
        </div>
        {post.imagePost ? (
          <div className={styles.imagePost}>
            <img src={imagePost} alt="Imagen del posteo" />
          </div>
        ) : (
          <></>
        )}
        <div className={styles.content}>
          <span id={id}/>
        </div>
        <div className={styles.likes}>
          <button
            className={
              likeState
                ? "fa-sharp fa-solid fa-heart"
                : "fa-sharp fa-regular fa-heart"
            }
            onClick={() => handlerClick()}
          />
          <span>{like}</span>
        </div>
        <div className={styles.addComent}>
          <AddComent
            image={image}
            userdevId={userdevId}
            postId={id}
          />
        </div>
        <div className={styles.comentarios}>
          <ComentContainer socialcomments={socialcomments} />
        </div>
      </div>
    </>
  );
};

export default CardPost;
