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

export const sendMP = async (donacion,input) =>{
  let data = await axios.post(URL.URL_PAYMENT,{...donacion,...input})
  console.log(data.data);
  return window.location.href=data.data
}