import React from "react";
import AddComent from "./AddComent.jsx";
import CardsComents from "./CardsComents";
import { useState } from "react";
import styles from "./Styles/CardPost.module.css";
import { useDispatch } from "react-redux";

const CardPost = ({ post }) => {
  const image =
    "data:image/png;base64,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";
  const name = "nacho";

  const { content, coments } = post;

  const [likeState, setStateLike] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handlerClick=()=>{
    setStateLike(!likeState)
    if(likeState == true){
        setLikes(likes-1)
    }
    else{
        setLikes(likes+1)
    }
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
          <span>{likes}</span>
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
