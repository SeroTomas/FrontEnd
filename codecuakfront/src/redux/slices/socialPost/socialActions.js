import { getPosts } from "./index.js";
import axios from "axios";
export const getPost = () => (dispatch) => {
    
  axios.get("https://backend-production-c946.up.railway.app/socialcuak")
    .then((res) =>dispatch(getPosts(res.data)))
    
};


// export function getPokeDetails(id) {
//     return async function (dispatch) {
//       const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
//       return dispatch({ type: GET_POKE_DETAILS, payload: detail.data });
//     };
//   }