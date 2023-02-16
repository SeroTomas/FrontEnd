import { getPosts } from "./index.js";
import axios from "axios";
export const getPost = () => (dispatch) => {
    
  axios.get("https://backend-production-c946.up.railway.app/socialcuak")
    .then((res) =>dispatch(getPosts(res.data)))
    
};

