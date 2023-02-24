import axios from "axios";
const URL = {
  URL_SOCIAL: "https://backend-production-c946.up.railway.app/socialcuak",
  URL_PAYMENT: "https://backend-production-c946.up.railway.app/payment"
};
export const sendPost = async (content, userId) => {
  let response = await axios.post(URL.URL_SOCIAL, { content, userId });
  return response
}

export const sendComment = async (content, userId, postId) => {
  let data = await axios.post(`${URL.URL_SOCIAL}/${postId}/comment`, { content, userId });
  return data
};

export const editPost = async (content, id) => {
  try {
    const data = await axios.put(`${URL.URL_SOCIAL}/${id}`, {content});
    return "Publicacion modificada con exito"
  } catch (error) {
    console.log(error.mesage)
    return "Algo ha salido mal"
  }
} 

export const deletePost = async (id) => {
  try {
    const data = await axios.delete(`${URL.URL_SOCIAL}/${id}`)
    return "Se ha eliminado la publicacion"
  } catch (error) {
    console.log(error.message)
    return "Algo ha salido mal"
  }
}




export const sendMP = async (donacion,input) =>{
  let data = await axios.post(URL.URL_PAYMENT,{...donacion,...input})
  console.log(data.data);
  return window.location.href=data.data
}