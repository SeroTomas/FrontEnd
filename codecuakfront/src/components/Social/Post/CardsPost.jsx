import React from "react";
import { useEffect } from "react";
import CardPost from "../../User/Cards/Post/CardPost.jsx";
import { postsHardCode } from "../../User/postSocial";
import styles from "./Styles/CardsPost.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/action";

const CardsPost = () => {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div className={styles.container}>
      {data?.map((post) => {
        return <CardPost post={post}/>;
      })}
    </div>
  );
};

export default CardsPost;
