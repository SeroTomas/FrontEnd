import axios from "axios";
const URL = {
    URL_SOCIAL: "https://backend-production-c946.up.railway.app/socialcuak",
  };
export const sendPost = async({ content, userId })=>{
    console.log(content, "esto es el content")
    console.log(userId, "esto es el user id")
    let response = await axios({
        url: URL.URL_SOCIAL,
        method: "POST",
        data: {content: content, userId: userId},
      });
      return response
}