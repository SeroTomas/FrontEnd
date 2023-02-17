import axios from "axios";
const URL = {
    URL_SOCIAL: "https://backend-production-c946.up.railway.app/socialcuak",
};
export const sendPost = async(content, userId)=>{
    let response = await axios.post(URL.URL_SOCIAL,{content,userId});
      return response
}

