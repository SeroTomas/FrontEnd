//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";

const PostSocialContainer = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(getAllPost());
  },[dispatch,posts])

  return (
    <div className={styles.container}>
      {posts?.map((post) => {
        return <CardPost post={post} />;
      })}
    </div>
  );
};

export default PostSocialContainer;
