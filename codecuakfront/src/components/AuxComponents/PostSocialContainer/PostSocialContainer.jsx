//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";
// dependencias mui
import { Box, Card, Skeleton } from "@mui/material";

const PostSocialContainer = () => {
  const token = localStorage.getItem("token");
  const {next, arrayPosts} = useSelector((state) => state.posts);
  const [getPost, setGetPost] = useState(true);
  const [page, setPage] = useState(0)
  const userData = useSelector((state) => state.userData)
  const dispatch = useDispatch();

  //--------Realiza petición de posts al cargar el componente-----
  useEffect(() => {
    dispatch(getAllPost(page+1));
    setPage(page+1);
    return () => dispatch(cleanPost());
  }, [dispatch])

  //Seteo el estado local getPost en true al actualizar el estado global "posts", para que se pueda realizar nuevas peticiones
  useEffect(()=>{
    setGetPost(true)
  },[arrayPosts])
  // ---------Concatena los array de posteos al actulizar el estado global "posts"------
  // useEffect(()=>{
  //   if(page==1) setArrayPosts(posts.results)
  //   else if(page>1){
  //     const newArray = arrayPosts.concat(posts.results);
  //     setArrayPosts(newArray);
  //     setGetPost(true) //Seteo el estado local getPost en true, para que se pueda realizar nuevas peticiones
  //   }
  // }, [posts])

  //-------- Coloca handlerScroll al montar componente y lo retira al desmontar------- 
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  
  // Hace Dispatch al llegar al final de la pagina y cumplir las condiciones
  function handleScroll(){
    if ( next && getPost && ((window.innerHeight + window.scrollY + 1) >= document.documentElement.scrollHeight)) {
      setGetPost(false);
      dispatch(getAllPost(page+1))
      setPage(page+1)
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap="15px" alignItems="center" width="90%">
      {arrayPosts.length?
        arrayPosts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        }) :
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

export default PostSocialContainer;
