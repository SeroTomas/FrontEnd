import axios from "axios";
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";

export const getPost = () => {
  return function (dispatch) {
    axios.get("http://localhost:3001/socialcuak").then((response) => {
      dispatch({ type: GET_POST, payload: response.data });
    });
  };
};
export const sendPost = ({content,userId}) => {
  return async function (dispatch){
      let data = await axios.post(`http://localhost:3001/socialcuak`, {content,userId});
      return dispatch({ type: ADD_POST, data  }); 
  }
}