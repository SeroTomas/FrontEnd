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
  let response = await axios.post(`${URL.URL_BASE}/${postId}/comment`, { content, userId });
  return response
};
// RUTA POST DEL USUARIO REGISTRADO

export const userRegister = async (user)=>{
  let response = await axios.post(`${URL.URL_BASE}/signup`,{user})
  return response
}