import React from "react";
import AddComent from "./AddComent.jsx";
import CardsComents from "./CardsComents";
import { useState } from "react";
import styles from "./Styles/CardPost.module.css";


const CardPost = ( { post } ) => {
console.log(post)


  const { content, coments, imagePost, likes } = post;
  const {name,image} = post.userdev

  const [likeState, setStateLike] = useState(false);
  const [like, setLike] = useState(likes);

  const handlerClick=()=>{
    if(likeState == true){
      setLike(like-1)
    }
    else{
      setLike(like+1)
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
          <span>{content}</span>
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
          <AddComent props={image} />
        </div>
        <div className={styles.comentarios}>
          <CardsComents props={coments} />
        </div>
      </div>
    </>
  );
};

export default CardPost;
