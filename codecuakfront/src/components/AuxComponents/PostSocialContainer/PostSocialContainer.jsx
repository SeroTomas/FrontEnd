//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";

const PostSocialContainer = () => {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <div className={styles.container}>
      {data?.map((post) => {
        return <CardPost post={post} />;
      })}
    </div>
  );
};

export default PostSocialContainer;
