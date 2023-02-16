import React from "react";
import { useEffect } from "react";
import CardPost from "./CardPost";
import { userPrueba } from "../../userPrueba";

import styles from "./Styles/CardsPost.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../../redux/slices/socialPost/socialActions";

const CardsPost = () => {
  const data = useSelector((state) => state.socialPost.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);
  console.log(data);
  return (
    <div className={styles.container}>
      {data?.map((post) => {
        return <CardPost post={post}/>;
      })}
    </div>
  );
};

export default CardsPost;
