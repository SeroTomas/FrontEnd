import axios from "axios";
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";

export const getPost = () => {
  return function (dispatch) {
    axios.get("https://backend-production-c946.up.railway.app/socialcuak").then((response) => {
      dispatch({ type: GET_POST, payload: response.data });
    });
  };
};
export const sendPost = ({content,userId}) => {
  return async function (dispatch){
      let data = await axios.post(`https://backend-production-c946.up.railway.app/socialcuak`, {content,userId});
      return dispatch({ type: ADD_POST, data  }); 
  }
}