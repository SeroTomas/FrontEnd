import axios from "axios";
// PARA CREAR UNA CONSTANTE DEL ACTION PRIMERO PONER
//ejemplo GET_ALL_POST
// primero tipo de peticion despues algo descriptivo de ser nesesario y depues la cosa con la que se trabaja xd
//💥 POSTEOS 💥
export const GET_ALL_POST = "GET_ALL_POST";
export const GET_POST_BY_ID = "GET_POST_BY_ID";
export const GET_POSTS_BY_USER_ID = "GET_POSTS_BY_USER_ID";
export const PUT_POST = "PUT_POST";
export const DELETE_POST = "DELETE_POST";
export const CLEAN_POST = "CLEAN_POST";
export const POST_LIKE = "POST_LIKE";
// 💥COMENTARIOS💥
export const GET_COMMENTS = "GET_COMMENTS";
export const POST_COMMENT = "POST_COMMENT";
export const PUT_COMMENT = "PUT_COMMENT";
export const DELETE_DESTROY_COMMENT = "DELETE_DESTROY_COMMENT";
export const DELETE_LOGIC_COMMENT = "DELETE_LOGIC_COMMENT";
// 💥USUARIOS💥
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_BYID_USER = "GET_BYID_USER";
export const GET_USERS_NAME = "GET_USERS_NAME";
export const GET_USERS_ALPHA = "GET_USERS_ALPHA";
export const GET_BYID_USER_DETAIL = "GET_BYID_USER_DETAIL";
export const GET_ALL_USER_ADMIN = "GET_ALL_USER_ADMIN";
export const CLEAN_USER_DETAIL = "CLEAN_USER_DETAIL";
const URL_BASE = "https://backend-production-c946.up.railway.app"
// https://backend-production-c946.up.railway.app/
// http://localhost:3001
// token cuenta codeCuak
const config = {
  headers: {
    "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMWM0MzRjODctMmI5MC00YWRkLWEyZjItZThhMDNjZDE1MjAxIn0sImlhdCI6MTY3NzI3NTAxNywiZXhwIjoxNjc3NDQ3ODE3fQ.aqhJ8pnoIK4i2I3DqXv4d0F2qojHlunw-WYSTboD8p4",
  }
}

// ##################### SOCIAL CUAK ########################
// POSTEOS  🛑
// GET ALL POST
// solamente vamos a tener los post con la info usuario
export const getAllPost = (page) => {
  return function (dispatch) {
    try {
      axios.get(`${URL_BASE}/socialcuak?page=${page}`).then((response) => {
        dispatch({ type: GET_ALL_POST, payload: { data: response.data, origin: "social" } });
      });
    } catch (error) {
      console.log(error.message)
    }
  };
};


//GET POST BY USERID
export const getPostsByUserId = (userId, page) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL_BASE}/socialcuak/user/${userId}?page=${page}`)
      dispatch({ type: GET_ALL_POST, payload: { data: data.data, origin: "user" } })
    } catch (error) {
      console.log(error)
    }
  }
}

//Los filtramos en el FRONT hasta que los del back hagan el filtro
export const getPostById = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL_BASE}/socialcuak/${postId}`, { headers: { "x-auth-token": token } });
      dispatch({ type: GET_POST_BY_ID, payload: data.data })
    } catch (error) {
      console.log(error.message)
    }
  }
}
// POST DEL POST XD
// mandar post requiere contenido y el id de usuarion todo por body
// PUT DEL POST
export const modifyPost = ({ postId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL_BASE}/socialcuak/${postId}`, { content });
    return dispatch({ type: PUT_POST, data });
  };
};
// DELETE DEL POST
export const deletePost = ( postId, token ) => {
  return async function (dispatch) {
    try {
      let data = await axios.delete(`${URL_BASE}/socialcuak/${postId}`, { headers: { "x-auth-token": token } });
      return dispatch({ type: DELETE_POST, payload: postId });
    } catch (error) {
      console.log(error)
    }
  };
};

// CLEAN POST
export const cleanPost = () => {
  return function (dispatch) {
    return dispatch({ type: CLEAN_POST })
  };
};

// POST LIKE
export const postLike = (postId, userId, token) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL_BASE}/socialcuak/${postId}/like`, null, { headers: { "x-auth-token": token } });
      const message = response.data.msg;
      return dispatch({ type: POST_LIKE, payload: { message, postId, userId } });
    } catch (error) {
      console.log(error)
    }
  }
}
// COMENTARIOS  🛑
export const getComments = (postId, page) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_BASE}/socialcuak/${postId}/comments`)
      return dispatch({ type: GET_COMMENTS, payload: response.data.results })
    } catch (error) {
      console.log(error.message)
    }
  }
}
// para mandar un comentario tenemos q mandar la ID DEL POST por PARAMS y por BODY tenemos que mandar el USERID y el CONTENIDO del COMENTARIO
// POST DEL COMENTARIO
export const sendComment = ({ content, userId, postId }) => {
  return async function (dispatch) {
    let data = await axios.post(`${URL_BASE}/socialcuak/${postId}/comment`, {
      content,
      userId,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// PUT DE COMENTARIO
export const modifyComment = ({ commentId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL_BASE}/socialcuak/${commentId}/comment`, {
      content,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// DELETE COMPLETO DEL COMENTARIO NO HAY VUELTA ATRAS
export const destroyDeleteComment = ({ commentId }) => {
  return async function (dispatch) {
    let data = await axios.delete(`${URL_BASE}/socialcuak/${commentId}/comment`);
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// COMENTADO POR EL MOMENTO FALTA CONFIRMACION DEL BACK
// export const logicDeleteComment = ({content,userId,postId}) => {
//   return async function (dispatch){
//       let data = await axios.delete(`${URL.URL_SOCIAL}/${postId}/comment`, {content,userId});
//       return dispatch({ type: ADD_COMMENT_URL, data  });
//   }
// }
// DELETE DEL COMENTARIO

// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑  USERS  🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑
// GET USERS BY ID NECESITA TOKEN
export const getUserById = (token, userId) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users/${userId}`, { headers: { "x-auth-token": token } });
      return dispatch({ type: GET_BYID_USER, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// PEDIR TODOS LOS USUARIOS  NO NECESITA TOKEN
export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users`)
      return dispatch({ type: GET_ALL_USER, payload: data.data })
    } catch (error) {
      console.log("Error en || getAllUsers ||")
    }
  }
}

export const getUsersByName = (name, token) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users/?name=${name}`, { headers: { "x-auth-token": token } })
      return dispatch({ type: GET_USERS_NAME, payload: data.data })
    }
    catch (error) {
      console.log("Error en || getUsersByName ||", error)
    }
  }
}
export const getUsersAlpha = (alpha) => {
  return async function (dispatch) {
    const data = await axios.get(`${URL_BASE}/users?alpha=${alpha}`)
    return dispatch({ type: GET_USERS_ALPHA, payload: data.data })
  }
}


export const getPage = (page) => {
  return async function (dispatch) {
    const data = await axios.get(`${URL_BASE}/users?page=${page}`)
    return dispatch({ type: GET_ALL_USER, payload: data.data })
  }

}

export const getUserDetailById = (userId, token) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL_BASE}/users/${userId}`, { headers: { 'x-auth-token': token } })
      dispatch({ type: GET_BYID_USER_DETAIL, payload: data.data });
    } catch (error) {
      console.log(error.message, 'error en getuserdatilbyid');
    };
  };
}

export const cleanUserDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_USER_DETAIL })
  }
}
///////// ADMIN ///////////////////////////////////////////////////////////////////////////
export const allUserAdmin = (token) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${URL_BASE}/users/admins`, { headers: { 'x-auth-token': token } });
      console.log(response)
      dispatch({ type: GET_ALL_USER_ADMIN, payload: response });
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteUser = async (id, token) => {
  try {

    let response = await axios.delete(`${URL_BASE}/users/${id}`, { headers: { 'x-auth-token': token } })
  } catch (error) {
    console.log(error)
  }
}
export const changeStatus = async (id, token, status) => {
  console.log(status)
  try {
    console.log(token, "token")
    let response = await axios.put(`${URL_BASE}/users/${id}/status`, { status: status }, { headers: { 'x-auth-token': token } })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}