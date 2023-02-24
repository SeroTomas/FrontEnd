import axios from "axios";
const URL = {
  URL_BASE: "https://backend-production-c946.up.railway.app",
};

// RUTA PARA POST POST
// falta fixear las rutas
export const sendPost = async (content, userId) => {
  let response = await axios.post(URL.URL_BASE, { content, userId });
  return response
}
// RUTA POST COMENTARIOS

export const sendComment = async (content, userId, postId) => {
  let data = await axios.post(`${URL.URL_SOCIAL}/${postId}/comment`, { content, userId });
  return data
};
// RUTA POST DEL USUARIO REGISTRADO

export const userRegister = async (user)=>{
  let response = await axios.post(`${URL.URL_BASE}/signup`,{user})
  return response}

// RUTA PARA EDITAR UN POST

export const editPost = async (content, id) => {
  try {
    const data = await axios.put(`${URL.URL_SOCIAL}/${id}`, {content});
    return "Publicacion modificada con exito"
  } catch (error) {
    console.log(error.mesage)
    return "Algo ha salido mal"
  }
} 
// RUTA PARA BORRAR UN POST

export const deletePost = async (id) => {
  try {
    const data = await axios.delete(`${URL.URL_SOCIAL}/${id}`)
    return "Se ha eliminado la publicacion"
  } catch (error) {
    console.log(error.message)
    return "Algo ha salido mal"
  }
}


