//estilos
import styles from "./postUserContainer.module.css";
//hooks
import { useEffect, useState } from "react"; ``
import { useDispatch, useSelector } from "react-redux";
//actions
import { cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";
// dependencias mui
import { Box, Card, Skeleton } from "@mui/material";
import { getPostsByUserId } from "../../../redux/action";

const PostUserContainer = ({user}) => {

  const posts = useSelector((state) => state.posts);
  const [arrayPosts, setArrayPosts] = useState([]);
  const [getPost, setGetPost] = useState(true);
  const [page, setPage] = useState(0)
  const dispatch = useDispatch();

  //--------Realiza petición de posts al cargar el componente---  --
  useEffect(() => {
    dispatch(getPostsByUserId( user.id, page + 1));
    setPage(page + 1);
    return () => dispatch(cleanPost());
  }, [dispatch])


  // ---------Concatena los array de posteos al actulizar el estado global "posts"------
  useEffect(() => {
    if (page === 1) setArrayPosts(posts.results.socialposts)
    else if (page > 1) {
      //const newArray = arrayPosts.concat(posts.results.socialposts);
      setArrayPosts([...arrayPosts, posts.results.socialposts]);
      setGetPost(true) //Seteo el estado local getPost en true, para que se pueda realizar nuevas peticiones
    }
  }, [posts])

  //-------- Coloca handlerScroll al montar componente y lo retira al desmontar------- 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  // Hace Dispatch al llegar al final de la pagina y cumplir las condiciones
  function handleScroll() {
    if (posts.next && getPost && ((window.innerHeight + window.scrollY + 1) >= document.documentElement.scrollHeight)) {
      setGetPost(false);
      dispatch(getPostsByUserId(user.id, page + 1))
      setPage(page + 1)
    }
    setGetPost(false)
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop="15px" gap="10px">
      {
        arrayPosts.length ?
          <>
            {arrayPosts?.map((post) => {
              return <CardPost post={post} user={user} />;
            })}
          </> :

          //---skeletons---
          <>
            {
              Array(5).fill().map((_, i) => {
                return (
                  <Card key={i} sx={{ padding: 1, width: 620, marginBottom: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: 2, marginLeft: 3 }}>
                      <Skeleton animation="wave" variant="circular" width={40} height={40} />
                      <Skeleton animation="wave" height={20} width="30%" sx={{ marginLeft: 2 }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Skeleton variant="rounded" width={550} height={60} sx={{ marginTop: 3, marginBottom: 3 }} />
                    </Box>
                  </Card>
                )
              })
            }
          </>

      }
    </Box>
  );
};

export default PostUserContainer;
