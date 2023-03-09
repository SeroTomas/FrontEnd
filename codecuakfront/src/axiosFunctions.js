import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserDetailById, getUserById, getAllPost } from "./redux/action";
const URL_BASE = "https://backend-production-c946.up.railway.app";
//  http://localhost:3001
// https://backend-production-c946.up.railway.app

// RUTA PARA PUBLICAR POST
// falta fixear las rutas
export const sendPost = async (content, image, userId, token) => {
  try {
    let response = await axios.post(
      `${URL_BASE}/socialcuak`,
      { content, image, userId },
      { headers: { "x-auth-token": token } }
    );
  } catch (error) {
    console.log(error.message);
  }
};

// RUTA PUBLICAR COMENTARIOS

// export const sendComment = async (content, userId, postId, token) => {
//   let data = await axios.post(`${URL_BASE}/socialcuak/${postId}/comment`, { content, userId }, { headers: { 'x-auth-token': token } } );
//   return data
// };
// ruta para traer comments
export const getComments = (postId, page) => {
  try {
    axios
      .get(`${URL_BASE}/socialcuak/${postId}/comments?page=${page}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const sendComment = async (content, userId, postId, token) => {
  try {
    const data = await axios.post(
      `${URL_BASE}/socialcuak/${postId}/comment`,
      { content, userId },
      { headers: { "x-auth-token": token } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
// RUTA PARA EDITAR UN POST

export const editPost = async (content, id, token) => {
  try {
    const data = await axios.put(`${URL_BASE}/socialcuak/${id}`, { content },  { headers: { "x-auth-token": token } });
  } catch (error) {
    console.log(error.mesage);
  }
};
// RUTA PARA BORRAR UN POST

export const deletePost = async (id, token) => {
  try {
    const data = await axios.delete(`${URL_BASE}/socialcuak/${id}`, { headers: { "x-auth-token": token } });  
  } catch (error) {
    console.log(error.message);
  }
};
// RUTA POST DEL MERCADO PAGO
export const sendMP = async (donacion, input) => {
  let data = await axios.post(`${URL_BASE}/payment`, {
    ...donacion,
    ...input,
  });
  console.log(data.data);
  return (window.location.href = data.data);
};
// RUTA POST DEL USUARIO REGISTRADO

export const userRegister = async (name, email, nickName, password) => {
  try {
    let response = await axios.post(`${URL_BASE}/auth/signup`, {
      name,
      email,
      nickName,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
    if (error.response.data.errors[0]?.msg) {
      if (error.response.data.errors.length == 2) {
        throw "El email y el nickName ya fueron usados por algun usuario";
      } else if (
        error.response.data.errors[0]?.msg ==
        "El email ya es usado por un usuario"
      ) {
        throw "El email ya esta usado por un usuario";
      } else if (
        error.response.data.errors[0]?.msg ==
          "El nickName ya es usado por un usuario" ||
        error.response.data.errors[1]?.msg ==
          "El nickName ya es usado por un usuario"
      ) {
        throw "El nickName ya es usado por un usuario";
      } else {
        throw "errorxd";
      }
    }
  }
};
// RUTA POST DEL LOG IN DE USUARIOS

export const userLogin = async (email, password) => {
  try {
    let response = await axios.post(`${URL_BASE}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const cloudinary = async (imagen, randomId) => {
  const formData = new FormData();
  formData.append("image", imagen);
  formData.append("publicId", randomId);
  const response = await axios.post(`${URL_BASE}/cloudinary`, formData);
  return response.data;
};

export const editUser = async (
  id,
  name,
  description,
  skills,
  github,
  about,
  image,
  token
) => {
  console.log(id);

  try {
    const response = await axios.put(
      `${URL_BASE}/users/${id}`,
      {
        name,
        description,
        skills,
        github,
        about,
        image,
      },
      { headers: { "x-auth-token": token } }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
